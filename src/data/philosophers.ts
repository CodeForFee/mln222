import type { Philosopher } from '../types';

export const philosophers: Philosopher[] = [
    {
        id: 'marx',
        name: 'Karl Marx',
        description: 'Nhà tư tưởng đặt nền móng cho chủ nghĩa xã hội khoa học, người đồng sáng lập chủ nghĩa Mác cùng Friedrich Engels.',
        birthYear: 1818,
        deathYear: 1883,
        portrait: '/images/KarlMarx.jpg',
        timeline: [
            {
                year: 1818,
                title: 'Sinh tại Trier, Phổ',
                content: 'Karl Marx sinh ngày 5/5/1818 trong một gia đình trí thức tư sản Do Thái. Cha ông là luật sư Heinrich Marx.',
                source: 'Biography – Marxists.org'
            },
            {
                year: 1835,
                title: 'Vào Đại học Bonn',
                content: 'Marx bắt đầu học luật tại Đại học Bonn, sau đó chuyển sang Đại học Berlin năm 1836.',
                source: 'Marx Biography Archive'
            },
            {
                year: 1841,
                title: 'Nhận bằng Tiến sĩ Triết học',
                content: 'Bảo vệ luận án tiến sĩ về triết học Epicurus tại Đại học Jena.',
                source: 'University of Jena Records'
            },
            {
                year: 1844,
                title: 'Gặp Friedrich Engels',
                content: 'Cuộc gặp gỡ quyết định tại Paris hình thành bộ đôi triết học Mác – Engels, khởi đầu tình bạn và hợp tác trọn đời.',
                source: 'Marx & Engels Correspondence Archive'
            },
            {
                year: 1848,
                title: 'Tuyên ngôn của Đảng Cộng sản',
                content: 'Marx và Engels xuất bản "Tuyên ngôn của Đảng Cộng sản", tác phẩm kinh điển định hình nền tảng chủ nghĩa xã hội khoa học.',
                source: 'Communist Manifesto – 1848'
            },
            {
                year: 1867,
                title: 'Bộ Tư bản (Tập I)',
                content: 'Công bố tập đầu tiên của bộ "Tư bản" (Das Kapital), công trình kinh tế chính trị trọng đại phân tích hệ thống tư bản.',
                source: 'Das Kapital – Vol I (1867)'
            },
            {
                year: 1883,
                title: 'Qua đời tại London',
                content: 'Karl Marx qua đời ngày 14/3/1883 tại London, Anh. Ông được chôn cất tại nghĩa trang Highgate.',
                source: 'Historical Records'
            }
        ],
        images: [
            { url: '/images/KarlMarx.jpg', caption: 'Karl Marx' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Communist-manifesto.png', caption: 'Tuyên ngôn 1848' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Zentralbibliothek_Z%C3%BCrich_Das_Kapital_Marx_1867.jpg', caption: 'Bộ Tư bản' }
        ]
    },
    {
        id: 'engels',
        name: 'Friedrich Engels',
        description: 'Nhà triết học, nhà kinh tế học và lý luận gia cách mạng người Đức, đồng sáng lập chủ nghĩa Mác.',
        birthYear: 1820,
        deathYear: 1895,
        portrait: '/images/FriedrichEngels.jpg',
        timeline: [
            {
                year: 1820,
                title: 'Sinh tại Barmen, Phổ',
                content: 'Friedrich Engels sinh ngày 28/11/1820 trong một gia đình chủ xưởng dệt giàu có.',
                source: 'Engels Biography Archive'
            },
            {
                year: 1842,
                title: 'Đến Manchester, Anh',
                content: 'Engels đến làm việc tại nhà máy của gia đình ở Manchester, nơi ông chứng kiến điều kiện sống của giai cấp công nhân.',
                source: 'Historical Records'
            },
            {
                year: 1844,
                title: 'Gặp Karl Marx',
                content: 'Cuộc gặp gỡ lịch sử tại Paris, khởi đầu tình bạn và hợp tác học thuật trọn đời.',
                source: 'Marx & Engels Correspondence'
            },
            {
                year: 1845,
                title: 'Tình cảnh giai cấp lao động ở Anh',
                content: 'Xuất bản tác phẩm nghiên cứu xã hội học đầu tiên về điều kiện sống của công nhân công nghiệp.',
                source: 'Engels Works Archive'
            },
            {
                year: 1848,
                title: 'Tuyên ngôn của Đảng Cộng sản',
                content: 'Đồng tác giả cùng Marx viết tác phẩm kinh điển này.',
                source: 'Communist Manifesto – 1848'
            },
            {
                year: 1878,
                title: 'Chống Dühring',
                content: 'Xuất bản "Chống Dühring", tổng hợp toàn diện quan điểm triết học Mác-xít.',
                source: 'Anti-Dühring (1878)'
            },
            {
                year: 1884,
                title: 'Nguồn gốc của gia đình, chế độ tư hữu và nhà nước',
                content: 'Phân tích nguồn gốc và phát triển của các thiết chế xã hội.',
                source: 'Engels Works'
            },
            {
                year: 1895,
                title: 'Qua đời tại London',
                content: 'Engels qua đời ngày 5/8/1895 tại London, sau khi hoàn thành biên tập tập II và III của Bộ Tư bản.',
                source: 'Historical Records'
            }
        ],
        images: [
            { url: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Friedrich_Engels_portrait_%28cropped%29.jpg', caption: 'Friedrich Engels' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Communist-manifesto.png', caption: 'Các tác phẩm của Engels' }
        ]
    },
    {
        id: 'lenin',
        name: 'Vladimir Ilyich Lenin',
        description: 'Nhà cách mạng, nhà lý luận chính trị, người sáng lập Nhà nước Xô Viết và phát triển chủ nghĩa Mác thành chủ nghĩa Mác-Lênin.',
        birthYear: 1870,
        deathYear: 1924,
        portrait: '/images/Vladimir.jpg',
        timeline: [
            {
                year: 1870,
                title: 'Sinh tại Simbirsk, Nga',
                content: 'Vladimir Ilyich Ulyanov (Lenin) sinh ngày 22/4/1870 trong một gia đình trí thức.',
                source: 'Lenin Biography Archive'
            },
            {
                year: 1887,
                title: 'Anh trai bị hành quyết',
                content: 'Alexander Ulyanov bị hành quyết vì âm mưu ám sát Nga hoàng, sự kiện ảnh hưởng sâu sắc đến Lenin.',
                source: 'Historical Records'
            },
            {
                year: 1893,
                title: 'Đến Saint Petersburg',
                content: 'Lenin chuyển đến Saint Petersburg và bắt đầu hoạt động cách mạng.',
                source: 'Lenin Works Archive'
            },
            {
                year: 1902,
                title: 'Làm gì?',
                content: 'Xuất bản tác phẩm "Làm gì?", đề ra lý thuyết về đảng tiên phong cách mạng.',
                source: 'What Is To Be Done? (1902)'
            },
            {
                year: 1905,
                title: 'Cách mạng Nga 1905',
                content: 'Tham gia lãnh đạo phong trào cách mạng 1905-1907.',
                source: 'Historical Records'
            },
            {
                year: 1916,
                title: 'Chủ nghĩa đế quốc',
                content: 'Xuất bản "Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản".',
                source: 'Imperialism (1916)'
            },
            {
                year: 1917,
                title: 'Cách mạng Tháng Mười',
                content: 'Lãnh đạo thành công Cách mạng Tháng Mười, lập ra Nhà nước Xô Viết đầu tiên trên thế giới.',
                source: 'October Revolution Records'
            },
            {
                year: 1924,
                title: 'Qua đời tại Gorki',
                content: 'Lenin qua đời ngày 21/1/1924 tại Gorki, để lại di sản to lớn cho phong trào cộng sản quốc tế.',
                source: 'Historical Records'
            }
        ],
        images: [
            { url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Vladimir_Lenin.jpg', caption: 'V.I. Lenin' },
            { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Storming_of_the_Winter_Palace.jpg', caption: 'Cách mạng Tháng Mười' }
        ]
    }
];

export const getPhilosopherById = (id: string): Philosopher | undefined => {
    return philosophers.find(p => p.id === id);
};
