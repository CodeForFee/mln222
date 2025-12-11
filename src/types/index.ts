// Philosopher types
export interface TimelineEvent {
    year: number;
    title: string;
    content: string;
    source: string;
}

export interface PhilosopherImage {
    url: string;
    caption: string;
}

export interface Philosopher {
    id: string;
    name: string;
    description: string;
    birthYear: number;
    deathYear: number;
    portrait: string;
    timeline: TimelineEvent[];
    images: PhilosopherImage[];
}

// Gallery types
export interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    year?: number;
    source: string;
    category: 'portrait' | 'historical' | 'book' | 'illustration';
}
