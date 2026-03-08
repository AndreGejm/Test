import { useState, useEffect, useMemo, memo, useRef } from 'react';
import './PortfolioRow.css';

const getEmbedProps = (work) => {
    let src = work.embedUrl;
    let originalLink = src;

    if (work.provider === 'youtube') {
        const videoId = new URL(src).searchParams.get('v') || src.split('/').pop();
        src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        originalLink = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (work.provider === 'soundcloud') {
        src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(src)}&color=%23d11a2a&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
    } else if (work.provider === 'spotify') {
        try {
            const urlObj = new URL(work.embedUrl);
            if (!urlObj.pathname.startsWith('/embed')) {
                src = `https://open.spotify.com/embed${urlObj.pathname}`;
            }
            originalLink = `https://open.spotify.com${urlObj.pathname.replace('/embed', '')}`;
        } catch {
            // Intentionally ignored, fallback used
        }
    } else if (work.provider === 'tidal') {
        try {
            const urlObj = new URL(work.embedUrl);
            if (!urlObj.hostname.includes('embed.tidal.com')) {
                const parts = urlObj.pathname.split('/').filter(Boolean);
                const id = parts.pop();
                let type = parts.pop();
                if (type === 'track') type = 'tracks';
                if (type === 'album') type = 'albums';
                if (type === 'playlist') type = 'playlists';
                if (type && id) {
                    src = `https://embed.tidal.com/${type}/${id}?layout=gridify`;
                }
            }
        } catch {
            // Intentionally ignored, fallback used
        }
    }

    return { src, originalLink };
};

const PortfolioCard = memo(({ work, isActive, onActivate }) => {
    const [fetchedThumb, setFetchedThumb] = useState(null);
    const [iframeState, setIframeState] = useState('idle'); // idle, loading, success, error
    const { src: embedSrc, originalLink } = getEmbedProps(work);

    const thumbUrl = useMemo(() => {
        if (work.provider === 'youtube') {
            const videoId = new URL(work.embedUrl).searchParams.get('v') || work.embedUrl.split('/').pop();
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
        return fetchedThumb;
    }, [work.provider, work.embedUrl, fetchedThumb]);

    useEffect(() => {
        let mounted = true;
        if (work.provider === 'spotify') {
            fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(originalLink)}`)
                .then(r => r.json())
                .then(d => { if (mounted) setFetchedThumb(d.thumbnail_url); })
                .catch(() => { });
        } else if (work.provider === 'soundcloud') {
            fetch(`https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(originalLink)}`)
                .then(r => r.json())
                .then(d => { if (mounted) setFetchedThumb(d.thumbnail_url); })
                .catch(() => { });
        }
        return () => { mounted = false; };
    }, [work.provider, originalLink]);

    useEffect(() => {
        if (isActive) {
            // eslint-disable-next-line
            setIframeState('loading');
            const timer = setTimeout(() => {
                setIframeState(prev => prev === 'loading' ? 'error' : prev);
            }, 8000); // 8 second timeout for iframe
            return () => clearTimeout(timer);
        } else {
            setIframeState('idle');
        }
    }, [isActive]);

    return (
        <div className={`portfolio-card ${isActive ? 'is-active' : ''}`}>
            {!isActive ? (
                <div
                    className="portfolio-thumb-view"
                    onClick={onActivate}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${work.title} by ${work.artist || 'Unknown'}`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onActivate(); }}
                >
                    <div className="portfolio-thumb-bg">
                        {thumbUrl ? (
                            <img src={thumbUrl} alt="" loading="lazy" className="portfolio-thumb-img" />
                        ) : (
                            <div className="portfolio-thumb-fallback">
                                <span>{work.provider}</span>
                            </div>
                        )}
                        <div className="portfolio-thumb-overlay">
                            <button className="portfolio-play-btn" aria-hidden="true">▶</button>
                        </div>
                    </div>
                    <div className="portfolio-card-meta">
                        <div className="portfolio-card-provider-icon">
                            {work.provider === 'youtube' && <span className="icon-yt">🎬</span>}
                            {work.provider === 'spotify' && <span className="icon-sp">🎧</span>}
                            {work.provider === 'soundcloud' && <span className="icon-sc">☁️</span>}
                            {work.provider === 'tidal' && <span className="icon-td">🌊</span>}
                            {work.provider === 'bandcamp' && <span className="icon-bc">⛺</span>}
                        </div>
                        <div className="portfolio-card-text">
                            <h3 className="portfolio-card-title">{work.title}</h3>
                            {work.artist && <p className="portfolio-card-artist">{work.artist}</p>}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="portfolio-embed-view">
                    <div className="portfolio-embed-header">
                        <span className="portfolio-embed-title">{work.title}</span>
                        <button className="portfolio-embed-close" onClick={onActivate} aria-label="Close player">✕</button>
                    </div>
                    <div className="portfolio-iframe-container">
                        {iframeState === 'loading' && <div className="portfolio-iframe-loader">Loading Player...</div>}
                        {iframeState === 'error' ? (
                            <div className="portfolio-iframe-error">
                                <p>Player failed to load.</p>
                                <a href={originalLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                    Open in {work.provider.charAt(0).toUpperCase() + work.provider.slice(1)}
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={embedSrc}
                                className="portfolio-iframe-live"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                allowFullScreen
                                onLoad={() => setIframeState('success')}
                                onError={() => setIframeState('error')}
                                title={work.title}
                            ></iframe>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});

export const PortfolioRow = ({ works }) => {
    const [activeId, setActiveId] = useState(null);
    const scrollRef = useRef(null);

    const scrollByCard = (direction) => {
        if (!scrollRef.current) return;
        // Approximate card width + gap. Can also measure child width if precise needed.
        // Assuming ~300px card + 24px gap = 324px
        const amount = direction === 'left' ? -324 : 324;
        scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    const handleActivate = (id) => {
        // Toggle if currently active
        setActiveId(prev => prev === id ? null : id);
    };

    return (
        <div className="portfolio-row-container">
            <button className="portfolio-nav-btn left" onClick={() => scrollByCard('left')} aria-label="Scroll left">‹</button>

            <div className="portfolio-scroller" ref={scrollRef}>
                {works.map((work) => (
                    <PortfolioCard
                        key={work.id}
                        work={work}
                        isActive={activeId === work.id}
                        onActivate={() => handleActivate(work.id)}
                    />
                ))}
            </div>

            <button className="portfolio-nav-btn right" onClick={() => scrollByCard('right')} aria-label="Scroll right">›</button>
        </div>
    );
};
