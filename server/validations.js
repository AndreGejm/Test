const { z } = require('zod');

const replySchema = z.object({
    content: z.string().min(1, 'Reply content cannot be empty')
});

const settingsSchema = z.object({
    heroHeadline: z.string().max(100).optional(),
    heroSubtext: z.string().max(300).optional(),
    primaryCtaLabel: z.string().max(30).optional(),
    primaryCtaTarget: z.string().max(50).optional(),
    secondaryCtaLabel: z.string().max(30).optional(),
    secondaryCtaTarget: z.string().max(50).optional(),
    contactEmail: z.string().email().optional(),
    locationText: z.string().max(100).optional(),
    socialInstagram: z.string().url().optional().or(z.literal('')),
    socialYouTube: z.string().url().optional().or(z.literal('')),
    socialBandcamp: z.string().url().optional().or(z.literal('')),
    socialFacebook: z.string().url().optional().or(z.literal('')),
    socialSoundCloud: z.string().url().optional().or(z.literal('')),
    socialFiverr: z.string().url().optional().or(z.literal('')),
    enableWork: z.boolean().default(true),
    enableServices: z.boolean().default(true),
    enableAbout: z.boolean().default(true),
    enableGear: z.boolean().default(true),
    enableReviews: z.boolean().default(true),
    enableBook: z.boolean().default(true),
    bookingEnabled: z.boolean().default(true),
    calendlyUrl: z.string().url().optional().or(z.literal('')),
    fallbackEmailText: z.string().max(100).optional(),
    nextAvailableDate: z.string().max(50).optional()
});

const workItemSchema = z.object({
    title: z.string().min(1).max(100),
    artist: z.string().max(100).optional(),
    role: z.string().max(50),
    embedUrl: z.string().url(),
    provider: z.enum(['youtube', 'bandcamp', 'soundcloud', 'spotify', 'tidal']),
    orderIndex: z.number().int().default(0),
    status: z.enum(['draft', 'published']).default('published')
});

const bookingSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(80),
    email: z.string().email('Invalid email address'),
    serviceType: z.enum(['Mixing', 'Mastering', 'Tracking', 'Complete'], {
        errorMap: () => ({ message: 'Please select a valid service type' })
    }),
    genre: z.string().max(60).optional().or(z.literal('')),
    message: z.string().max(2000).optional().or(z.literal('')),
    numSongs: z.number().int().min(1).max(999).optional().nullable(),
    songLength: z.string().max(20).optional().or(z.literal('')),
    numStems: z.number().int().min(1).max(9999).optional().nullable(),
});

const statusChangeSchema = z.object({
    status: z.enum(['PENDING', 'ACCEPTED', 'REJECTED', 'IN_PROGRESS', 'READY_FOR_REVIEW', 'UPDATING', 'COMPLETED']),
    message: z.string().max(2000).optional().or(z.literal('')),
    force: z.boolean().optional(), // Admin override for non-standard transitions
});

const driveLinkSchema = z.object({
    driveLink: z.string().url('Must be a valid URL').max(500),
});

const reviewSubmitSchema = z.object({
    token: z.string().min(10),
    rating: z.number().int().min(1).max(5),
    comment: z.string().min(30, 'Review must be at least 30 characters').max(1000),
    displayName: z.string().min(1, 'Name is required').max(80),
});

// Allowed status transitions
const ALLOWED_TRANSITIONS = {
    PENDING: ['ACCEPTED', 'REJECTED'],
    ACCEPTED: ['IN_PROGRESS', 'REJECTED'],
    IN_PROGRESS: ['READY_FOR_REVIEW', 'UPDATING'],
    READY_FOR_REVIEW: ['UPDATING', 'COMPLETED'],
    UPDATING: ['READY_FOR_REVIEW', 'COMPLETED'],
    COMPLETED: [],
    REJECTED: [],
};

module.exports = {
    replySchema,
    settingsSchema,
    workItemSchema,
    bookingSchema,
    reviewSubmitSchema,
    statusChangeSchema,
    driveLinkSchema,
    ALLOWED_TRANSITIONS
};
