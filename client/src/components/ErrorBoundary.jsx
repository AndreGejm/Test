import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // We could log to an external service here if we had one
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={styles.container}>
                    <div style={styles.content}>
                        <h1 style={styles.heading}>Something went wrong.</h1>
                        <p style={styles.text}>
                            The application encountered an unexpected error. Please try refreshing the page.
                        </p>
                        {import.meta.env.DEV && this.state.error && (
                            <pre style={styles.errorText}>
                                {this.state.error.toString()}
                            </pre>
                        )}
                        <button
                            style={styles.button}
                            onClick={() => {
                                this.setState({ hasError: false, error: null });
                                window.location.hash = '';
                                window.location.reload();
                            }}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

const styles = {
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#050505',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif'
    },
    content: {
        maxWidth: '500px',
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#111',
        borderRadius: '8px',
        border: '1px solid #333'
    },
    heading: {
        marginTop: 0,
        fontSize: '1.5rem',
        color: '#ff4444'
    },
    text: {
        color: '#aaa',
        marginBottom: '1.5rem',
        lineHeight: 1.5
    },
    errorText: {
        textAlign: 'left',
        backgroundColor: '#222',
        padding: '1rem',
        borderRadius: '4px',
        overflowX: 'auto',
        fontSize: '0.85rem',
        color: '#ffa',
        marginBottom: '1.5rem'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#f1f1f1',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 600
    }
};

export default ErrorBoundary;
