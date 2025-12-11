export interface GalleryImage {
    id: string;
    url: string;
    caption: string;
    year?: number;
    source: string;
    category: 'portrait' | 'historical' | 'book' | 'illustration';
}

export const galleryImages: GalleryImage[] = [
    // Portraits
    {
        id: 'marx-portrait-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg',
        caption: 'Karl Marx (1818-1883)',
        year: 1875,
        source: 'John Jabez Edwin Mayall',
        category: 'portrait'
    },
    {
        id: 'engels-portrait-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Friedrich_Engels_portrait_%28cropped%29.jpg/500px-Friedrich_Engels_portrait_%28cropped%29.jpg?20251211040513',
        caption: 'Friedrich Engels (1820-1895)',
        year: 1879,
        source: 'Wikimedia Commons',
        category: 'portrait'
    },
    {
        id: 'lenin-portrait-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Vladimir_Lenin_after_finishing_his_exile_in_Siberia%2C_1900-1.jpg/748px-Vladimir_Lenin_after_finishing_his_exile_in_Siberia%2C_1900-1.jpg?20160426173734',
        caption: 'V.I. Lenin (1870-1924)',
        year: 1920,
        source: 'Wikimedia Commons',
        category: 'portrait'
    },
    // Historical
    {
        id: 'revolution-1',
        url: 'https://quocphongthudo.vn/upload/2001606/20231109/cm-thang-10_03989.jpg',
        caption: 'Cách mạng Tháng Mười 1917',
        year: 1917,
        source: 'Quốc phòng Thủ Đô',
        category: 'historical'
    },
    {
        id: 'paris-commune-1',
        url: 'https://cms.tapchigiaochuc.com.vn/uploads/2024/03/16/cong-xa-paris.jpg',
        caption: 'Công xã Paris 1871',
        year: 1871,
        source: 'tapchigiaochuc.com.vn',
        category: 'historical'
    },
    {
        id: 'first-international-1',
        url: 'https://vietjack.me/storage/uploads/images/19/untitled-1637657962.png',
        caption: 'Quốc tế thứ nhất',
        year: 1864,
        source: 'vietjack.me',
        category: 'historical'
    },
    // Books
    {
        id: 'manifesto-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Communist-manifesto.png',
        caption: 'Tuyên ngôn của Đảng Cộng sản (1848)',
        year: 1848,
        source: 'Wikimedia Commons',
        category: 'book'
    },
    {
        id: 'capital-1',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Zentralbibliothek_Z%C3%BCrich_Das_Kapital_Marx_1867.jpg/960px-Zentralbibliothek_Z%C3%BCrich_Das_Kapital_Marx_1867.jpg',
        caption: 'Bộ Tư bản - Tập I (1867)',
        year: 1867,
        source: 'Wikimedia',
        category: 'book'
    },
    {
        id: 'state-revolution-1',
        url: 'https://file.qdnd.vn/data/images/0/2017/10/08/tuanson/08102017son6.jpg?w=578',
        caption: 'Nhà nước và Cách mạng (1917)',
        year: 1917,
        source: 'www.qdnd.vn',
        category: 'book'
    },
    // Illustrations
    {
        id: 'workers-unite-1',
        url: 'https://baoquankhu4.com.vn/upload/18269/20210318/353_a0e96138bb.jpg',
        caption: 'Vô sản toàn thế giới, Đoàn kết lại!',
        source: 'www.baoquankhu4.com.vn',
        category: 'illustration'
    }
];

export const getImagesByCategory = (category: GalleryImage['category']): GalleryImage[] => {
    return galleryImages.filter(img => img.category === category);
};
