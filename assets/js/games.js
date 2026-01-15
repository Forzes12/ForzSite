// Популярные игры (будут показаны на главной странице)
const popularGamesTitles = [
    'Grand Theft Auto V',
    'My Winter Car',
    'Black Myth: Wukong',
    'Quarantine Zone: The Last Check'
];

// Новинки (будут показаны на главной странице)
const newGamesTitles = [
    'My Winter Car',
    'Battlefield 6',
    'Hollow Knight Silksong',
    'Quarantine Zone: The Last Check'
];

// Игры для слайдера
const sliderGames = [
    {
        id: 'gta-5',
        title: 'Grand Theft Auto V',
        description: 'Легендарная игра от Rockstar Games с открытым миром и бесконечными возможностями.',
        image: 'https://i.postimg.cc/fLLHJ2Ck/1668436193-cover-1.jpg',
        buttonText: 'Играть сейчас'
    },
    {
        id: 'blackmythwukong',
        title: 'Black Myth: Wukong',
        description: 'Захватывающее action-RPG с видом от третьего лица, основанное на классическом китайском романе.',
        image: 'https://i.postimg.cc/ZRS075B0/6abe2744c8-black-myth-wukong-9619.jpg',
        buttonText: 'Смотреть трейлер'
    },
    {
        id: 'spider-man-2',
        title: 'Spider-Man 2',
        description: 'Новые приключения Человека-паука с эпической историей и новыми способностями.',
        image: 'https://i.postimg.cc/4NRqkwDR/1738265146-library-600x900-2x-1.jpg',
        buttonText: 'Узнать больше'
    },
    {
        id: 'battlefield6',
        title: 'Battlefield 6',
        description: 'Вернитесь на поля сражений будущего в новейшей части легендарного шутера.',
        image: 'https://i.postimg.cc/KzDHS31K/1758749271-library-capsule-2x.jpg',
        buttonText: 'Скачать сейчас'
    },
    {
        id: 'my-winter-car',
        title: 'My Winter Car',
        description: 'Истинно финская зимняя симуляция начала 1990-х! Сохрани свою Satsuma AMP от ржавчины, борись с морозами, пей глинтвейн, зарабатывай на зимних работах и постарайся не замерзнуть в этой беспощадной симуляции выживания в суровых условиях.',
        image: 'https://i.postimg.cc/rF71HHQN/1767038108-library-capsule-2x.jpg',
        buttonText: 'Скачать сейчас'
    },
    {
        id: 'quarantine-zone-the-last-check',
        title: 'Quarantine Zone: The Last Check',
        description: 'Выживание в постапокалиптической зоне отчуждения от Shadowfall Studios. Окажитесь в эпицентре глобальной катастрофы, где вы — один из последних операторов, способных предотвратить полный коллапс. Исследуйте зараженные кварталы, сражайтесь с мутантами, находите ресурсы и принимайте морально сложные решения, которые определят судьбу уцелевших. Модифицируйте оборудование, создавайте убежища и раскрывайте мрачные тайны карантинной зоны в хардкорной игре, сочетающей напряженный экшен, глубокий стелс и выживание в условиях тотальной опасности.',
        image: '1',
        buttonText: 'Скачать сейчас'
    }
];

// ВСЕ ИГРЫ И ПРОГРАММЫ С ОРИГИНАЛЬНЫМИ КАТЕГОРИЯМИ
let gameData = {};
/*
    'dead-island-2': {
        title: 'Dead Island 2',
        description: 'Эпическое приключение в зомби-апокалипсисе Лос-Анджелеса. Убейте орды зомби в потрясающем кровавом стиле и откройте для себя секреты ада на земле.',
        image: 'https://i.postimg.cc/dQLxg34m/1670961819-cover.jpg',
        size: '45 GB',
        year: 2023,
        updated: '27.10.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=130',
        trailer: 'https://vk.com/video_ext.php?oid=-30602036&id=456283259&hash=abc123&hd=2',
        buyGame: 'https://ggsel.net/catalog/dead-island-2-keys-steam',
        screenshots: [
            'https://i.postimg.cc/x8MYQNPJ/1681135851-ds-venice-night-1.jpg',
            'https://i.postimg.cc/3JQYB9KG/1681135896-1670389875-1541-1.jpg',
            'https://i.postimg.cc/NjptQcR9/1681135881-rikky-cinematic-1.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Выживание',
            'Платформа': 'PC, PS5, Xbox Series X',
            'Разработчик': 'Dambuster Studios',
            'Издатель': 'Deep Silver',
            'Язык': 'Русский (интерфейс)',
            'Рейтинг': '4.5/5',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Кооператив до 3 игроков',
            'Длительность': '20-30 часов',
            'Достижения': '51 достижение'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'AMD FX-9590 / Intel Core i7-7700HQ',
                'Память': '10 GB ОЗУ',
                'Видеокарта': 'Radeon R9 390X / GeForce GTX 1060',
                'DirectX': 'Версии 11',
                'Место на диске': '45 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10',
                'Процессор': 'AMD Ryzen 5 5600X / Intel Core i9-9900K',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'Radeon RX 6800 XT / GeForce RTX 2070 Super',
                'DirectX': 'Версии 12',
                'Место на диске': '45 GB'
            }
        }
    },
    'detroit-become-human': {
        title: 'Detroit: Become Human',
        description: 'Глубокий сюжет о будущем человечества и андроидов. Принимайте решения, которые влияют на судьбу персонажей и весь мир игры.',
        image: 'https://image2url.com/images/1763316625840-70478c0c-4f53-42e5-bd44-7ddd56c787d2.png',
        size: '55 GB',
        year: 2018,
        updated: '01.03.2023',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=2179',
        trailer: 'https://drive.google.com/file/d/1ZCGhL3LDb-8dLcXygnTbg3F3WeSp_7m5/preview',
        buyGame: 'https://ggsel.net/catalog/detroit-become-human-3886',
        screenshots: [
            'https://i.postimg.cc/MTJXb7Qq/1553366453-detroit-become-human-screen-01-ps4-us-13apr18.jpg',
            'https://i.postimg.cc/KvpzsSM4/1553366426-detroit-become-human-screen-01-ps4-us-19apr18.jpg',
            'https://i.postimg.cc/65FKv9Zk/1553366441-detroit-become-human-screen-02-ps4-us-13apr18-1.jpg'
        ],
        specs: {
            'Жанр': 'Приключение, Интерактивная драма',
            'Платформа': 'PC, PS4',
            'Разработчик': 'Quantic Dream',
            'Издатель': 'Sony Interactive Entertainment',
            'Язык': 'Русская озвучка',
            'Рейтинг': '4.8/5',
            'Сложность': 'Низкая',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '10-12 часов',
            'Достижения': '46 достижений'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-2400 / AMD FX-8320',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 660 / AMD Radeon HD 7950',
                'DirectX': 'Версии 11',
                'Место на диске': '55 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i7-2700K / AMD Ryzen 5 1600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 1080 / AMD Radeon RX Vega 64',
                'DirectX': 'Версии 11',
                'Место на диске': '55 GB'
            }
        }
    },
    'gta-6': {
        title: 'GTA 6',
        description: 'Самая ожидаемая игра десятилетия. Возвращение во вселенную Grand Theft Auto с новой графикой, механиками и бесконечными возможностями.',
        image: 'https://i.postimg.cc/J0nMCxD8/1746544167-ma5dehcf-lwg7zlyjdkqvq-1.jpg',
        size: 'Неизвестно GB',
        year: 2026,
        updated: '26.09.2025',
        status: 'soon',
        category: 'games',
        trailer: 'https://drive.google.com/file/d/1l9-SpOp0QY4C2A9Ug2rUMsaUbSzqjWFJ/preview',
        screenshots: [
            'https://i.postimg.cc/QdssXjWz/1746543938-7nrcbjsshlti29jb1c9mvw-1.jpg',
            'https://i.postimg.cc/FsXXZhGr/1746543938-18r83yshxek9y-rchkvgra-1.jpg',
            'https://i.postimg.cc/yNdMdx6Q/1746543878-dcglfxtbyyklacc0bz2jsq-1.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Приключение',
            'Платформа': 'PC, PS5, Xbox Series X',
            'Разработчик': 'Rockstar Games',
            'Издатель': 'Rockstar Games',
            'Язык': 'Информация уточняется',
            'Рейтинг': 'Ожидается',
            'Сложность': 'Различная',
            'Мультиплеер': 'GTA Online 2.0',
            'Длительность': '40+ часов',
            'Достижения': 'Информация уточняется'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Информация уточняется',
                'Процессор': 'Информация уточняется',
                'Память': 'Информация уточняется',
                'Видеокарта': 'Информация уточняется',
                'DirectX': 'Информация уточняется',
                'Место на диске': 'Информация уточняется'
            },
            'Рекомендуемые': {
                'ОС': 'Информация уточняется',
                'Процессор': 'Информация уточняется',
                'Память': 'Информация уточняется',
                'Видеокарта': 'Информация уточняется',
                'DirectX': 'Информация уточняется',
                'Место на диске': 'Информация уточняется'
            }
        }
    },
    'little-nightmares-3': {
        title: 'Little Nightmares 3',
        description: 'Новые приключения в жутком мире кошмаров. Исследуйте мрачные локации и избегайте ужасных созданий в этом хоррор-платформере.',
        image: 'https://i.postimg.cc/6QrzhhmZ/1697041363-library-600x900-2x-1-1.jpg',
        size: '11.77 GB',
        year: 2025,
        updated: '19.11.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=25363',
        trailer: 'https://drive.google.com/file/d/1FFEYZ4aImNICT8YX2G4XziW8wvIJez_L/preview',
        buyGame: 'https://ggsel.net/catalog/little-nightmares-3-keys-and-gifts-steam',
        screenshots: [
            'https://i.postimg.cc/bNZT5PBK/1692778601-ss-0266e383a8bca23411d6a7676aa9ba27cc27d487.jpg',
            'https://i.postimg.cc/Dwsc2gnn/1692778539-ss-3180ec3ac73e13f7affc1b6869bb87df2dc6f7c0.jpg',
            'https://i.postimg.cc/d1W2WNm3/1692778525-ss-3317c0038f9ebdc75beb8ce4b92368285cc17f94.jpg'
        ],
        specs: {
            'Жанр': 'Хоррор, Платформер',
            'Платформа': 'PC, PS5, Xbox Series X',
            'Разработчик': 'Supermassive Games',
            'Издатель': 'Bandai Namco',
            'Язык': 'Русский (интерфейс)',
            'Рейтинг': '4.3/5',
            'Сложность': 'Высокая',
            'Мультиплеер': 'Кооператив до 2 игроков',
            'Длительность': '8-10 часов',
            'Достижения': '35 достижений'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-2300 / AMD FX-4350',
                'Память': '6 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 650 Ti / AMD Radeon R7 360',
                'DirectX': 'Версии 11',
                'Место на диске': '12 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-4690K / AMD Ryzen 3 1300X',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 970 / AMD Radeon RX 570',
                'DirectX': 'Версии 11',
                'Место на диске': '12 GB'
            }
        }
    },
    'little-nightmares-2': {
        title: 'Little Nightmares II',
        description: 'Оказавшись в далёком, окутанном туманом городе, мальчик по имени Моно объединяется с Секстой, чтобы сбежать из кошмарного мира, охваченного зловещей трансляцией с Башни.',
        image: 'https://image2url.com/images/1764590925321-b26798fa-7eaf-45cc-a3bf-563c33234df0.jpg',
        size: '3.57 GB',
        year: 2021,
        updated: '26.08.2022',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=3197',
        trailer: 'https://drive.google.com/file/d/1bUnpBkIYGGmCVyKNUMSbj_rCPzKwKkAT/preview',
        buyGame: 'https://ggsel.net/catalog/little-nightmares-2-keys-steam-standart',
        screenshots: [
            'https://image2url.com/images/1764591531688-286da4b6-be4d-4509-8ace-20d889571b3a.jpg',
            'https://image2url.com/images/1764591556276-5e84cdb0-b2a4-43d6-ad41-5bcbf6ddc50e.jpg',
            'https://image2url.com/images/1764591582748-6d9a0f0a-ed0a-402b-b4f3-42a753b3ea27.jpg'
        ],
        specs: {
            'Жанр': 'Хоррор, Платформер, Приключение',
            'Платформа': 'PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch',
            'Разработчик': 'Tarsier Studios',
            'Издатель': 'Bandai Namco Entertainment',
            'Язык': 'Русский (интерфейс и субтитры)',
            'Рейтинг': '4.5/5',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Одиночная игра',
            'Длительность': '6-8 часов',
            'Достижения': '30 достижений'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-2300 / AMD FX-4350',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 570 / AMD Radeon HD 7850',
                'DirectX': 'Версии 11',
                'Место на диске': '6 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-3470 / AMD FX-8350',
                'Память': '6 GB ОЗУ',
                'Видеокарта': 'Nvidia GeForce GTX 970 / AMD Radeon R9 290',
                'DirectX': 'Версии 11',
                'Место на диске': '6 GB'
            }
        }
    },
    'my-summer-car': {
        title: 'My Summer Car',
        description: 'Настоящая финская симуляция лета 1995 года! Построй свой автомобиль Satsuma AMP с нуля, работай на свалке, пей пиво, избегай комаров и попытайся выжить в этой максимально реалистичной и детализированной симуляции жизни.',
        image: 'https://image2url.com/images/1764592417007-24f274f7-0ef3-4c65-ba60-eba8c10a0745.jpg',
        size: '500 MB',
        year: 2016,
        updated: '29.09.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=25116',
        trailer: 'https://drive.google.com/file/d/1rTfV83o4uBXl5GDAK1Rm2fIlq_O50LZK/preview',
        buyGame: 'https://ggsel.net/catalog/steam-40437',
        screenshots: [
            'https://image2url.com/images/1764592319875-c058bb42-5f8c-421e-8d0b-562bd872d59a.jpg',
            'https://image2url.com/images/1764592338003-1e9976c7-9242-454e-a97c-f2e47ffaa7a2.jpg',
            'https://image2url.com/images/1764592356422-8174ba8d-6a32-4754-a7ae-fcf98f36771a.jpg'
        ],
        specs: {
            'Жанр': 'Симулятор, Автосимулятор, Выживание, Инди',
            'Платформа': 'PC (Windows)',
            'Разработчик': 'Amistech Games',
            'Издатель': 'Amistech Games',
            'Язык': 'Английский (есть русские фанатские патчи)',
            'Рейтинг': '9/10 Steam (крайне положительные)',
            'Сложность': 'Очень высокая (реализм)',
            'Мультиплеер': 'Нет (только моды)',
            'Длительность': 'От 20 до 100+ часов',
            'Достижения': '60 достижений Steam',
            'Особенности': 'Полная свобода действий, детальная сборка двигателя, система потребностей'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7 / 8 / 10 (64-bit)',
                'Процессор': 'Dual Core 2.0 GHz',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'Intel HD Graphics 4000 / Dedicated GPU with 1GB VRAM',
                'DirectX': 'Версии 9.0c',
                'Место на диске': '1 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Quad Core 3.0 GHz',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 265',
                'DirectX': 'Версии 11',
                'Место на диске': '2 GB'
            }
        }
    },
    'my-winter-car': {
        title: 'My Winter Car',
        description: 'Истинно финская зимняя симуляция начала 1990-х! Сохрани свою Satsuma AMP от ржавчины, борись с морозами, пей глинтвейн, зарабатывай на зимних работах и постарайся не замерзнуть в этой беспощадной симуляции выживания в суровых условиях.',
        image: 'https://i.postimg.cc/rF71HHQN/1767038108-library-capsule-2x.jpg',
        size: '388 MB',
        year: 2025,
        updated: '10.01.2026',
        status: 'available',
        category: 'games',
        torrentFile: 'https://itorrents-igruha.org/engine/download.php?id=96854',
        trailer: 'https://drive.google.com/file/d/11dj9PbHsOViBsE3kF7VjB5HEY4UbAnF2/preview',
        buyGame: 'https://ggsel.net/catalog/product/my-winter-car-steam-gift-ru-ua-kz-by-in-ch-ar-tr-102113925',
        screenshots: [
            'https://i.postimg.cc/wB2wRppq/1767038127-ss-2cc16cf260e3bd37151c68586d5ba616f2b56770.jpg',
            'https://i.postimg.cc/Sxq5nVMW/1767038165-ss-71c9f410c5e048b06634cc209cf1573aef8fa976.jpg',
            'https://i.postimg.cc/m2WpnVV6/1767038132-ss-11534a9e30c81d5d692da362626507c8e68b1cf0.jpg',
            'https://i.postimg.cc/mDMNNWxk/1767038188-ss-4380575e5d9c5e997b7b8fc0a5d477990315f8a6.jpg',
            'https://i.postimg.cc/XvBw46YK/1767038192-ss-b1e589ed228588ef85091e2ebd8657792d78de5f.jpg',
            'https://i.postimg.cc/g2nhHbRB/1767038110-ss-c0794b83ab872610158ed0a366a46a80e701f914.jpg',
            'https://i.postimg.cc/nr3sq3LQ/1767038161-ss-ce7a707ce57e97f612a16a209ded6d4e8afa319e.jpg',
            'https://i.postimg.cc/7hZhPSNr/1767038162-ss-da2d075287cf45c867ef345a980930a051707171.jpg'
        ],
        specs: {
            'Жанр': 'Симулятор, Автосимулятор, Выживание, Инди, Сезонный',
            'Платформа': 'PC (Windows)',
            'Разработчик': 'Amistech Games',
            'Издатель': 'Amistech Games',
            'Язык': 'Английский (поддержка фанатских локализаций)',
            'Рейтинг': '9/10 Steam (очень положительные)',
            'Сложность': 'Экстремальная (суровый реализм зимних условий)',
            'Мультиплеер': 'Нет (только моды)',
            'Длительность': 'От 30 до 150+ часов',
            'Достижения': '75 достижений Steam',
            'Особенности': 'Сезонные изменения, система обогрева и выживания в холоде, зимний тюнинг, борьба с обледенением'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Quad Core 2.5 GHz',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 660 / AMD Radeon HD 7870 (2GB VRAM)',
                'DirectX': 'Версии 11',
                'Место на диске': '3 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 11 (64-bit)',
                'Процессор': 'Six Core 3.5 GHz',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 (4GB VRAM)',
                'DirectX': 'Версии 12',
                'Место на диске': '5 GB'
            }
        }
    },
    'hollow-knight-silksong': {
        title: 'Hollow Knight Silksong',
        description: 'Продолжение культового приключения. Играйте за Хорнет и исследуйте новое королевство, полное опасностей и тайн.',
        image: 'https://i.postimg.cc/28NF8t8S/1755787377-library-600x900-2x-1.jpg',
        size: '1.81 GB',
        year: 2025,
        updated: '11.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=25940',
        trailer: 'https://drive.google.com/file/d/1b2HdVrg-VhsGMBhkV4vrL08ZhexzvZlz/preview',
        buyGame: 'https://ggsel.net/catalog/steam-38446',
        screenshots: [
            'https://i.postimg.cc/Z5KNWtGf/1755787322-ss-0a6eebaf5ade7dbd1dcffcc108d6b5dca68373f3-1.jpg',
            'https://i.postimg.cc/L6mYWF8m/1755787294-ss-4c9cc3320086b199da64a4283f45ff41fe873d5e-1.jpg',
            'https://i.postimg.cc/J4TndyF9/1755787303-ss-8a7f8252f9a1f79742ce6e0a006bf5360697be8b-1.jpg'
        ],
        specs: {
            'Жанр': 'Метроидвания, Платформер',
            'Платформа': 'PC, PS5, Xbox Series X, Switch',
            'Разработчик': 'Team Cherry',
            'Издатель': 'Team Cherry',
            'Язык': 'Русский (интерфейс)',
            'Рейтинг': '4.9/5',
            'Сложность': 'Очень высокая',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '25-40 часов',
            'Достижения': 'Информация уточняется'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7',
                'Процессор': 'Intel Core 2 Duo E5200',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'GeForce 9800GTX+',
                'DirectX': 'Версии 10',
                'Место на диске': '2 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'GeForce GTX 560',
                'DirectX': 'Версии 11',
                'Место на диске': '2 GB'
            }
        }
    },
    'spider-man-2': {
        title: 'Spider-Man 2',
        description: 'Новые приключения Человека-паука. Сыграйте за Питера Паркера и Майлза Моралеса в эпической истории с новыми врагами и способностями.',
        image: 'https://i.postimg.cc/4NRqkwDR/1738265146-library-600x900-2x-1.jpg',
        size: '88.08 GB',
        year: 2025,
        updated: '29.09.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=22660',
        trailer: 'https://drive.google.com/file/d/1Og_0J7oBUu2_weBm9NBTOB_58fEiOEvv/preview',
        buyGame: 'https://ggsel.net/catalog/steam-102079',
        screenshots: [
            'https://i.postimg.cc/RCKpRKWM/1738265228-ss-0fda7c96ee3f16038559fffa8c2cd7b3ac433c2b.jpg',
            'https://i.postimg.cc/Gp4qsy0L/1738265190-ss-7ef8bc176702470fdc73f62f8e537c3912e70444.jpg',
            'https://i.postimg.cc/J4Rx5gwD/1738265154-ss-74e612eb0ae275bd6e7f69d407dda8b03d83629f.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Приключение',
            'Платформа': 'PS5',
            'Разработчик': 'Insomniac Games',
            'Издатель': 'Sony Interactive Entertainment',
            'Язык': 'Русская озвучка',
            'Рейтинг': '4.7/5',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '20-25 часов',
            'Достижения': '50 достижений'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 64-bit',
                'Процессор': 'Intel Core i5-4670 / AMD Ryzen 5 1600',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB',
                'DirectX': 'Версии 12',
                'Место на диске': '88 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10 64-bit',
                'Процессор': 'Intel Core i5-8400 / AMD Ryzen 5 3600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA RTX 3070 / AMD RX 6800 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '88 GB SSD'
            }
        }
    },
    'gta-5': {
        title: 'Grand Theft Auto V',
        description: 'Легендарная игра от Rockstar Games, в которой вас ждут три главных героя, огромный открытый мир Сан-Андреаса и бесконечные возможности для хаоса и приключений.',
        image: 'https://i.postimg.cc/fLLHJ2Ck/1668436193-cover-1.jpg',
        size: '110 GB',
        year: 2015,
        updated: '17.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=153',
        trailer: 'https://drive.google.com/file/d/1BwKqJPcZa_tIY_J-VHphtE-j7N9_MUeM/preview',
        buyGame: 'https://ggsel.net/catalog/grand-theft-auto-v-keys-steam',
        screenshots: [
            'https://i.postimg.cc/XJRDmKfQ/1659003266-ss-320f7bf17d387eddb1c7153e2bf8de8e14bc4d39-1920x1080.jpg',
            'https://i.postimg.cc/zX1ckjXb/1659003173-ss-be2b9e45c671f95b8bc9fde58dbbd1154b0b633a-1920x1080.jpg',
            'https://i.postimg.cc/8zZXNgdM/1659003211-ss-680684304e38a9c58a55866cde99469ae8ef510c-1920x1080.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Приключения, Шутер',
            'Платформа': 'PC, PS4, PS5, Xbox One, Xbox Series X|S',
            'Разработчик': 'Rockstar North',
            'Издатель': 'Rockstar Games',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '18+',
            'Сложность': 'Различная',
            'Мультиплеер': 'нету в торрент версии',
            'Длительность': '~35 часов (основной сюжет)',
            'Достижения': 'Есть (Steam, PlayStation, Xbox)'
        },
        systemRequirements: {
            'Минимальные': {
               'ОС': 'Windows 10 64 Bit',
               'Процессор': 'Intel Core 2 Quad CPU Q6600 / AMD Phenom 9850',
               'Память': '4 GB ОЗУ',
               'Видеокарта': 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
               'DirectX': 'Версии 10',
               'Место на диске': '110 GB'
            },
            'Рекомендуемые': {
            'ОС': 'Windows 10 64 Bit',
            'Процессор': 'Intel Core i5 3470 / AMD FX-8350',
            'Память': '8 GB ОЗУ',
            'Видеокарта': 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
            'DirectX': 'Версии 10',
            'Место на диске': '110 GB'
          }
        }
    },
    'gta-4': {
        title: 'Grand Theft Auto IV: The Complete Edition',
        description: 'Культовая игра, которая переопределила жанр. История иммигранта Нико Беллика, приехавшего в Либерти-Сити в поисках американской мечты.',
        image: 'https://i.postimg.cc/0Qh244HS/1664728110-grand-theft-auto-iv.jpg',
        size: '25 GB',
        year: 2008,
        updated: '19.06.2023',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=74',
        trailer: 'https://drive.google.com/file/d/1u4Ov9NN54algWRQd0N9LM_XxKwTRCvS7/preview',
        buyGame: 'https://ggsel.net/catalog/grand-theft-auto-iv-gta-4-keys-complete-edition',
        screenshots: [
            'https://i.postimg.cc/3N6pn92S/1414763222-05-r-1-1024x640-1.jpg',
            'https://i.postimg.cc/nLZmRXQJ/1414763271-07-r-1-1024x640-1.jpg',
            'https://i.postimg.cc/m2HFTYQC/1414763225-08-r-1-1024x640-1.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Приключения, Шутер',
            'Платформа': 'PC, PS3, Xbox 360, Xbox One',
            'Разработчик': 'Rockstar North',
            'Издатель': 'Rockstar Games',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '18+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отключен в пиратской версии',
            'Длительность': '~30 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows XP/Vista',
                'Процессор': 'Intel Core 2 Duo 1.8GHz / AMD Athlon II X4 620',
                'Память': '1.5 GB ОЗУ',
                'Видеокарта': 'NVIDIA 7900 / ATI X1900 (256 MB)',
                'DirectX': 'Версии 9.0c',
                'Место на диске': '22 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 7',
                'Процессор': 'Intel Core 2 Quad 2.4GHz / AMD Phenom X3 2.1GHz',
                'Память': '2 GB ОЗУ',
                'Видеокарта': 'NVIDIA 8600 (512 MB) / ATI 3870 (512 MB)',
                'DirectX': 'Версии 9.0c',
                'Место на диске': '25 GB'
          }
        }
    },
    'gta-san-andreas': {
        title: 'Grand Theft Auto: San Andreas',
        description: 'Легендарная игра серии GTA. Карл Джонсон возвращается в Лос-Сантос после смерти матери. Ему предстоит восстановить свою банду, вернуть утраченные территории и раскрыть заговор против своей семьи.',
        image: 'https://i.postimg.cc/htTSqrJK/gta-san-andreas-original-8900.jpg',
        size: '4.7 GB',
        year: 2004,
        updated: '12.11.2024',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=53',
        trailer: 'https://drive.google.com/file/d/1RFkalR_P4_T3H17F0JpwuRIMLFuZHcgE/preview',
        buyGame: 'https://ggsel.net/catalog/steam-49912',
        screenshots: [
            'https://i.postimg.cc/j5Zf4KtR/1scr-430537248.jpg',
            'https://i.postimg.cc/L6qPLrWz/2scr-3431000846.jpg',
            'https://i.postimg.cc/N0x2QYyh/3scr-8584037606.jpg'
        ],
        specs: {
            'Жанр': 'Экшен, Приключения, Шутер, Симулятор жизни',
            'Платформа': 'PC, PS2, PS3, PS4, Xbox, Xbox 360, Xbox One, iOS, Android',
            'Разработчик': 'Rockstar North',
            'Издатель': 'Rockstar Games',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '18+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отключен в пиратской версии',
            'Длительность': '~50 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 2000/XP',
                'Процессор': 'Intel Pentium 4 1.8GHz / AMD Athlon XP 1800+',
                'Память': '512 MB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce 3 64MB / ATI Radeon 8500 64MB',
                'DirectX': 'Версии 9.0',
                'Место на диске': '4.7 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows XP/Vista/7',
                'Процессор': 'Intel Pentium 4 2.4GHz / AMD Athlon XP 2400+',
                'Память': '1 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce 6 128MB / ATI Radeon 9600 128MB',
                'DirectX': 'Версии 9.0',
                'Место на диске': '5 GB'
          }
        }
    },
    'teardown': {
        title: 'Teardown',
        description: 'Игра-головоломка в жанре воксельной песочницы с полной разрушаемостью окружения. Планируйте идеальное ограбление, используя физику и разрушаемость окружающей среды.',
        image: 'https://i.postimg.cc/jd8xX5pC/teardown-8763.jpg',
        size: '2.25 GB',
        year: 2020,
        updated: '16.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=20675',
        trailer: 'https://drive.google.com/file/d/1OIQ3h5WFgIOICkYHPUPxXMdzqkN_rQhN/preview',
        buyGame: 'https://ggsel.net/catalog/teardown-5927',
        screenshots: [
            'https://i.postimg.cc/hGxgQ5np/1700059364-ss-4e43fc5c0302825007c35f51e03964726a06e984.jpg',
            'https://i.postimg.cc/SsfhDYJt/1700059324-ss-9a48b92d7144b7f4a27c0b5bc7dac1e687698f5b.jpg',
            'https://i.postimg.cc/yxfzzqhf/1700059324-ss-9fd3e8de605efc42e29ba98f72432cb78a15d7ac.jpg'
        ],
        specs: {
            'Жанр': 'Головоломка, Песочница, Симулятор, Хейст',
            'Платформа': 'PC, PS5, Xbox Series X/S',
            'Разработчик': 'Tuxedo Labs',
            'Издатель': 'Tuxedo Labs, Saber Interactive',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '12+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'перейдите в online раздел',
            'Длительность': '~15 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-2400 / AMD Ryzen 3 1200',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GT 630 / AMD Radeon HD 6570',
                'DirectX': 'Версии 11',
                'Место на диске': '2 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-7700K / AMD Ryzen 5 3600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '2 GB'
          }
        }
    },
    'the-crew-2': {
        title: 'The Crew 2',
        description: 'Масштабная гоночная игра с открытым миром, где вы можете участвовать в гонках на самых разных транспортных средствах - от спорткаров до самолетов и лодок.',
        image: 'https://image2url.com/images/1763215988383-e953343c-e838-44fb-965f-3b8fb2e099e7.jpg',
        size: '35.63 GB',
        year: 2018,
        updated: '17.10.2025',
        status: 'buy',
        category: 'games',
        torrentFile: '',
        trailer: 'https://drive.google.com/file/d/1MmnTrdB9X7vhKOhVij3b6uLMQ7jvYpRz/preview',
        buyGame: 'https://ggsel.net/catalog/the-crew-2-keys-steam',
        screenshots: [
            'https://image2url.com/images/1763216195469-eea2b746-041a-4d2f-931b-6fd7bd41cdd7.jpg',
            'https://image2url.com/images/1763216207734-993b6d85-3085-4e97-9f80-9999bfd165a5.jpg',
            'https://image2url.com/images/1763216218088-f16d9d09-a13f-4a53-81c6-e1b9d08ac34d.jpg'
        ],
        specs: {
            'Жанр': 'Гоночный, Открытый мир, Аркада',
            'Платформа': 'PC, PS4, Xbox One, PS5, Xbox Series X/S',
            'Разработчик': 'Ivory Tower',
            'Издатель': 'Ubisoft',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '3+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~20 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-2400s / AMD FX-6100',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 660 / AMD Radeon R9 270X',
                'DirectX': 'Версии 11',
                'Место на диске': '35.63 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-4790 / AMD Ryzen 5 1600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 570',
                'DirectX': 'Версии 12',
                'Место на диске': '35.63 GB'
          }
        }
    },
    'the-crew': {
        title: 'The Crew',
        description: 'Первая часть культовой гоночной франшизы с открытым миром. Отправляйтесь в захватывающее путешествие по просторам США, участвуйте в уличных гонках.',
        image: 'https://image2url.com/images/1763217725103-cba8ced6-3abf-4a66-948f-e9b610f42fe7.jpg',
        size: '23.83 GB',
        year: 2014,
        updated: '04.02.2023',
        status: 'buy',
        category: 'games',
        torrentFile: '',
        trailer: 'https://drive.google.com/file/d/1UbM5xcXYzjIpIsVnzpoGv4GvRxeK9AAV/preview',
        buyGame: 'https://ggsel.net/catalog/the-crew-motorfest-keys-steam',
        screenshots: [
            'https://image2url.com/images/1763217983447-dcbad02f-536f-4388-80f3-83b817e27e0b.jpg',
            'https://image2url.com/images/1763218021075-f9943f23-29b6-43e8-a184-25f00bda01d0.jpg',
            'https://image2url.com/images/1763218041740-c416d645-b420-4659-a2a5-d79f16db63f1.jpg'
        ],
        specs: {
            'Жанр': 'Гоночный, Открытый мир, Экшен',
            'Платформа': 'PC, PS4, Xbox One, Xbox 360',
            'Разработчик': 'Ivory Tower',
            'Издатель': 'Ubisoft',
            'Язык': 'Русский (текст и интерфейс), Английский (озвучка)',
            'Рейтинг': '16+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~20 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7/8/10',
                'Процессор': 'Intel Core2Quad Q9300 / AMD Athlon II X4 620',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 260 / AMD Radeon HD 4870',
                'DirectX': 'Версии 10',
                'Место на диске': '23.83 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 7/8/10',
                'Процессор': 'Intel Core i7-2600K / AMD FX-8150',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 580 / AMD Radeon HD 7870',
                'DirectX': 'Версии 11',
                'Место на диске': '23.83 GB'
          }
        }
    },
    'blackmythwukong': {
        title: 'Black Myth: Wukong',
        description: 'Захватывающее action-RPG с видом от третьего лица, основанное на классическом китайском романе. Войдите в роль Просветлённого с посохом.',
        image: 'https://i.postimg.cc/ZRS075B0/6abe2744c8-black-myth-wukong-9619.jpg',
        size: '128.9 GB',
        year: 2024,
        updated: '08.08.2024',
        status: 'buy',
        category: 'games',
        torrentFile: '',
        trailer: 'https://drive.google.com/file/d/1xWBoqzhHXsEiyPqsu1yhrLxv_Kp4JFKt/preview',
        buyGame: 'https://ggsel.net/catalog/black-myth-wukong-keys-steam',
        screenshots: [
            'https://i.postimg.cc/G90fYVSw/1scr-7958143981.jpg',
            'https://i.postimg.cc/Bn3SfVZN/2scr-843523299.jpg',
            'https://i.postimg.cc/HxrHtGzf/3scr-91813175.jpg'
        ],
        specs: {
            'Жанр': 'Action-RPG, Приключения, Слэшер',
            'Платформа': 'PC, PS5, Xbox Series X/S',
            'Разработчик': 'Game Science',
            'Издатель': 'Game Science',
            'Язык': 'Русский (интерфейс и субтитры), Китайский (озвучка)',
            'Рейтинг': '18+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~40 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-8400 / AMD Ryzen 5 1600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580',
                'DirectX': 'Версии 12',
                'Место на диске': '128.9 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-9700K / AMD Ryzen 5 5500',
                'Память': '32 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 4060 Ti / AMD Radeon RX 7600 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '128.9 GB'
          }
        }
    },
    'battlefield6': {
        title: 'Battlefield 6',
        description: 'Вернитесь на поля сражений будущего в новейшей части легендарного шутера. Массовые multiplayer-битвы с разрушаемостью, передовой техникой и динамичной погодой ждут вас.',
        image: 'https://i.postimg.cc/KzDHS31K/1758749271-library-capsule-2x.jpg',
        size: '84.88 GB',
        year: 2025,
        updated: '23.11.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=17708',
        trailer: 'https://drive.google.com/file/d/1FDlcjDXxTlKnd39IXl9j-rbbFRka2ODB/preview',
        buyGame: 'https://ggsel.net/catalog/battlefield-6-keys-steam',
        screenshots: [
            'https://i.postimg.cc/mg1pZ5cG/804efa1507-1scr-2807960.jpg',
            'https://i.postimg.cc/xdKsMN3Y/815163d7f7-2scr-2807960.jpg',
            'https://i.postimg.cc/ZRHVDkgk/cc0faf8b17-3scr-2807960.jpg'
        ],
        specs: {
            'Жанр': 'Шутер от первого лица, Экшен',
            'Платформа': 'PC, PS5, Xbox Series X/S',
            'Разработчик': 'EA DICE',
            'Издатель': 'Electronic Arts',
            'Язык': 'Русский (интерфейс и субтитры), Английская озвучка',
            'Рейтинг': '18+',
            'Сложность': 'Динамическая (зависит от режима и противников)',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '8 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i5-6600K / AMD Ryzen 5 1600',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570',
                'DirectX': 'Версии 12',
                'Место на диске': '128.9 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-9700K / AMD Ryzen 5 5500',
                'Память': '32 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 4060 Ti / AMD Radeon RX 7600 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '84.88 GB'
          }
        }
    },
    'satisfactory': {
        title: 'Satisfactory',
        description: 'Игра в жанре фабричного симулятора от первого лица с открытым миром. Стройте масштабные промышленные комплексы, автоматизируйте производственные цепочки.',
        image: 'https://i.postimg.cc/QVGXt6pP/8f16b32a83-library-600x900.jpg',
        size: '11.33 GB',
        year: 2020,
        updated: '22.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=17513',
        trailer: 'https://drive.google.com/file/d/1-WkrFIz0Deo0kcMylr4HOvfQSCDaOJyi/preview',
        buyGame: 'https://ggsel.net/catalog/satisfactory-4424',
        screenshots: [
            'https://i.postimg.cc/BQXYQS6k/1scr-759026200.jpg',
            'https://i.postimg.cc/KYrQs4qT/2scr-73122741.jpg',
            'https://i.postimg.cc/Zn0cRHTN/3scr-33173699.jpg'
        ],
        specs: {
            'Жанр': 'Симулятор, Стратегия, Песочница',
            'Платформа': 'PC',
            'Разработчик': 'Coffee Stain Studios',
            'Издатель': 'Coffee Stain Publishing',
            'Язык': 'Русский (интерфейс и субтитры), Английский (озвучка)',
            'Рейтинг': '12+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'перейдите в online раздел',
            'Длительность': '~100+ часов',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7/8/10 (64-bit)',
                'Процессор': 'Intel Core i3-2100 / AMD A8-5600K',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GT 630 / AMD Radeon HD 6570',
                'DirectX': 'Версии 9.0',
                'Место на диске': '11.33 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i5-2400 / AMD FX-6300',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 265',
                'DirectX': 'Версии 11',
                'Место на диске': '11.33 GB'
          }
        }
    },
    'sons-of-the-forest': {
        title: 'Sons of The Forest',
        description: 'Ужасы на острове с открытым миром и элементами выживания. Оказавшись на загадочном острове в поисках пропавшего миллиардера, вы столкнётесь с кровожадными мутантами и каннибалами.',
        image: 'https://i.postimg.cc/X7j8pVv3/df07036159-sons-of-the-forest-9931.jpg',
        size: '10.07 GB',
        year: 2023,
        updated: '21.01.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=13549',
        trailer: 'https://drive.google.com/file/d/1FWaZ62BD40qOGCwt8N6zqP1JYaQllSUY/preview',
        buyGame: 'https://ggsel.net/catalog/sons-of-the-forest-keys-steam',
        screenshots: [
            'https://i.postimg.cc/ZYMRyHbc/1651822141-s1.jpg',
            'https://i.postimg.cc/bvpNjFgP/1651822142-s2.jpg',
            'https://i.postimg.cc/brDqTXyF/1651822143-s3.jpg'
        ],
        specs: {
            'Жанр': 'Выживание, Хоррор, Приключения',
            'Платформа': 'PC',
            'Разработчик': 'Endnight Games',
            'Издатель': 'Newnight',
            'Язык': 'Русский (интерфейс и субтитры), Английский (озвучка)',
            'Рейтинг': '18+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'перейдите в online раздел',
            'Длительность': '~25 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
                'Память': '12 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 570',
                'DirectX': 'Версии 11',
                'Место на диске': '10.07 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '10.07 GB'
          }
        }
    },
    'cyberpunk-2077': {
        title: 'Cyberpunk 2077',
        description: 'Эпический ролевый экшен в мрачном будущем. Станьте наёмником в мегаполисе Найт-Сити, принимайте решения, влияющие на судьбу города и его жителей.',
        image: 'https://image2url.com/images/1764939088905-11a4d2ff-c4c9-45c9-b660-13459fcb39e3.jpg',
        size: '70 GB',
        year: 2020,
        updated: '20.09.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=25167',
        trailer: 'https://drive.google.com/file/d/1BatuMKfYTKKxJyTV3oGSuXm6WwDkG4fGW/preview',
        buyGame: 'https://ggsel.net/catalog/cyberpunk-2077-1991',
        screenshots: [
            'https://image2url.com/images/1764939399807-f80a47b5-f2fa-425a-b5ec-faf8279ea3ae.jpg',
            'https://image2url.com/images/1764939422379-d81d5d54-d917-41d6-85e0-63b48cf05808.jpg',
            'https://image2url.com/images/1764939445334-9d86ac09-480b-4eb6-a5e3-c5d22742a7ad.jpg'
        ],
        specs: {
            'Жанр': 'RPG, Экшен, Открытый мир',
            'Платформа': 'PC, PS4, PS5, Xbox One, Xbox Series X',
            'Разработчик': 'CD Projekt RED',
            'Издатель': 'CD Projekt',
            'Язык': 'Русская озвучка и субтитры',
            'Рейтинг': '18+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~20-30 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Intel Core i5-3570K / AMD FX-8310',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 780 / AMD Radeon RX 470',
                'DirectX': 'Версии 12',
                'Место на диске': '70 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i7-4790 / AMD Ryzen 3 3200G',
                'Память': '12 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580',
                'DirectX': 'Версии 12',
                'Место на диске': '70 GB'
          }
        }
    },
    'beamng-drive': {
        title: 'BeamNG.drive',
        description: 'Реалистичный физический симулятор вождения с передовой технологией мягкой деформации. Тестируйте автомобили, создавайте сценарии и наслаждайтесь разрушениями в реальном времени.',
        image: 'https://image2url.com/images/1764940551166-94c4a978-279e-4d97-ad11-abdeccd96a51.jpg',
        size: '30 GB',
        year: 2015,
        updated: '16.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.ru/download/BeamNG_drive_v0.37.6.0.torrent',
        trailer: 'https://drive.google.com/file/d/1BatuMKfYTKKxJyTV3oGSuXm6WwDkG4fGW/preview',
        buyGame: 'https://ggsel.net/catalog/beamng-drive-5686',
        screenshots: [
            'https://image2url.com/images/1764940793390-2d56ed07-95d6-41ed-88c5-a8ee2e04037b.jpg',
            'https://image2url.com/images/1764940817060-9afc566c-0883-4b40-bd0e-e92e7b3d60d8.jpg',
            'https://image2url.com/images/1764940841108-7e3a5407-1220-4133-955a-e9bdf39555a7.jpg'
        ],
        specs: {
            'Жанр': 'Симулятор вождения, Физический симулятор',
            'Платформа': 'PC',
            'Разработчик': 'BeamNG GmbH',
            'Издатель': 'BeamNG GmbH',
            'Язык': 'Английский интерфейс и субтитры',
            'Рейтинг': '12+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует (но есть моды)',
            'Длительность': 'Бесконечная (песочница)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Intel Core i5-8600 / AMD Ryzen 5 2600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1070 / AMD Radeon RX 580 (8 GB VRAM)',
                'DirectX': 'Версии 11',
                'Место на диске': '30 GB SSD'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i7-12700K / AMD Ryzen 7 7800X3D',
                'Память': '32 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 4070 / AMD Radeon RX 7800 XT (12+ GB VRAM)',
                'DirectX': 'Версии 12',
                'Место на диске': '50 GB SSD (NVMe)'
          }
        }
    },
    'star-trucker': {
        title: 'Star Trucker',
        description: 'Космический симулятор дальнобойщика в открытой галактике. Управляйте мощными космическими грузовиками, выполняйте контракты на перевозку грузов между планетами.',
        image: 'https://i.postimg.cc/vmb9Sh6f/c667c2e5b8-star-trucker.jpg',
        size: '4.35 GB',
        year: 2024,
        updated: '14.11.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=12692',
        trailer: 'https://drive.google.com/file/d/18qfVWnWkHMAbekztQpBlMDb7xPCx6ZXp/preview',
        buyGame: 'https://ggsel.net/catalog/product/star-trucker-steam-gift-avtodostavka-4648151',
        screenshots: [
            'https://i.postimg.cc/j5JfFS4p/5ee5883d7d-1scr-131178.jpg',
            'https://i.postimg.cc/HsmM6H8C/a5d97e751d-2scr-954045.jpg',
            'https://i.postimg.cc/MGnfnpNy/93dca86712-3scr-701361.jpg'
        ],
        specs: {
            'Жанр': 'Симулятор, Приключения, Космос',
            'Платформа': 'PC, Xbox Series X/S',
            'Разработчик': 'Monumental Games',
            'Издатель': 'Rogue Games',
            'Язык': 'Русский (интерфейс и субтитры), Английский (озвучка)',
            'Рейтинг': '12+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~30 часов (основной сюжет)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Intel Core i5-7500 / AMD Ryzen 5 1600',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580',
                'DirectX': 'Версии 11',
                'Место на диске': '4.35 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11 (64-bit)',
                'Процессор': 'Intel Core i7-9700K / AMD Ryzen 5 3600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '4.35 GB'
          }
        }
    },
    'bridge-constructor-portal': {
        title: 'Bridge Constructor Portal',
        description: 'Уникальная головоломка, сочетающая физику строительства мостов из Bridge Constructor и юмор механик из Portal.',
        image: 'https://i.postimg.cc/BvnkDdBh/1579317787-bridge-constructor-portal.jpg',
        size: '102.51 МБ',
        year: 2017,
        updated: '29.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=5266',
        trailer: 'https://drive.google.com/file/d/1zzwhorW60lh7rPDPrtRkR_0UooorLH9_/preview',
        buyGame: 'https://ggsel.net/catalog/steam-65109',
        screenshots: [
            'https://i.postimg.cc/wjCRspzp/1588339410-1scr-444339352.jpg',
            'https://i.postimg.cc/PJ5CkfWM/1588339420-2scr-476387619.jpg',
            'https://i.postimg.cc/jS7LTF7J/1588339458-3scr-132412499.jpg'
        ],
        specs: {
            'Жанр': 'Головоломка, Симулятор, Инди',
            'Платформа': 'PC, PS4, Xbox One, Nintendo Switch, iOS, Android',
            'Разработчик': 'ClockStone',
            'Издатель': 'Headup Games',
            'Язык': 'Русский (интерфейс и субтитры), Английский (озвучка)',
            'Рейтинг': '12+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~15 часов',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7/8/10',
                'Процессор': 'Intel Core i3-2100 / AMD A8-5600K',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GT 630 / AMD Radeon HD 6570',
                'DirectX': 'Версии 9.0',
                'Место на диске': '102.51 МБ'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i5-2400 / AMD FX-6300',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 265',
                'DirectX': 'Версии 11',
                'Место на диске': '102.51 МБ'
          }
        }
    },
    'garrys-mod': {
        title: 'Garrys Mod',
        description: 'Культовая песочница на движке Source, где ваше воображение - единственный предел. Создавайте сцены, механизмы, транспорт и целые миры.',
        image: 'https://i.postimg.cc/Xq9B81k5/e351793853-garrys-mod-7262.jpg',
        size: '2.89 ГБ',
        year: 2006,
        updated: '13.12.2025',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=23121',
        trailer: 'https://drive.google.com/file/d/-/preview',
        buyGame: 'https://ggsel.net/catalog/garrys-mod-keys',
        screenshots: [
            'https://i.postimg.cc/0yyrMyFd/1303a2fc41-1scr-740191.jpg',
            'https://i.postimg.cc/8CqC0BcN/5f006ed31f-2scr-14519.jpg',
            'https://i.postimg.cc/C54L53NR/64683e0083-3scr-292223.jpg'
        ],
        specs: {
            'Жанр': 'Песочница, Симулятор, Инди',
            'Платформа': 'PC',
            'Разработчик': 'Facepunch Studios',
            'Издатель': 'Valve',
            'Язык': 'Русский (интерфейс и субтитры), Английский (озвучка)',
            'Рейтинг': '16+',
            'Сложность': 'Любая',
            'Мультиплеер': 'перейдите в online раздел',
            'Длительность': 'Неограниченная',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows Windows XP/Vista/7/8/10',
                'Процессор': 'Intel Core 2 Duo / AMD Athlon 64 X2',
                'Память': '4 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce 6800 / AMD Radeon X800',
                'DirectX': 'Версии 9.0',
                'Место на диске': '2.89 ГБ'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i5-2400 / AMD Ryzen 3 1200',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580',
                'DirectX': 'Версии 11',
                'Место на диске': '2.89 ГБ'
          }
        }
    },
    'metro-exodus-enhanced-edition': {
        title: 'Metro Exodus Enhanced Edition',
        description: 'Эпическое путешествие по постапокалиптическому миру в улучшенной версии. Исследуйте огромные открытые локации, сражайтесь с мутантами и принимайте сложные решения в этой захватывающей истории.',
        image: 'https://i.postimg.cc/Y016L8P6/1668385222-cover.jpg',
        size: '60 GB',
        year: 2023,
        updated: '14.12.2023',
        status: 'available',
        category: 'games',
        torrentFile: 'https://thelastgame.org/index.php?do=download&id=25000',
        trailer: 'https://drive.google.com/file/d/1wh_yZGiWCXZnArJHnK0VtNtV4H_plLEw/preview',
        buyGame: 'https://ggsel.net/catalog/metro-exodus-enhanced-edition-keys-steam',
        screenshots: [
            'https://i.postimg.cc/8kd50sqw/1590586271-ss-1da518a3baf5cd738cf48f3d963e4ece5adbb5fa-1920x1080.jpg',
            'https://i.postimg.cc/Fs9R5Nvj/1590586348-ss-2b6de212728afd89cf2a89211942e30e770b27e7-1920x1080.jpg',
            'https://i.postimg.cc/0QY8FHHc/1590586301-ss-2f9ec7b918c28b2b57fd5cb4b5be061a6e59a863-1920x1080.jpg'
        ],
        specs: {
            'Жанр': 'Шутер от первого лица, Приключение, Постапокалипсис',
            'Платформа': 'PC, PS4, PS5, Xbox One, Xbox Series X',
            'Разработчик': '4A Games',
            'Издатель': 'Deep Silver',
            'Язык': 'Русская озвучка и субтитры',
            'Рейтинг': '18+',
            'Сложность': 'Высокая',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~15-20 часов',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i5-4440 / AMD Ryzen 3 1200',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB',
                'DirectX': 'Версии 12',
                'Место на диске': '60 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-8700K / AMD Ryzen 5 3600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '60 GB'
          }
        }
    },
    'need-for-speed-most-wanted-2005': {
        title: 'Need for Speed: Most Wanted (2005)',
        description: 'Культовая аркадная гонка от EA. Станьте самым разыскиваемым гонщиком в городе Рокпорт, участвуйте в уличных гонках, уклоняйтесь от полиции и составляйте «Черный список» из 15 лучших уличных гонщиков. Захватывающий микс гонок, тюнинга и полицейских погонь.',
        image: 'https://i.postimg.cc/wM0D3mSc/1668122281-cover.jpg',
        size: '2.5 GB',
        year: 2005,
        updated: '21.07.2023',
        status: 'available',
        category: 'games',
        torrentFile: 'https://itorrents-igruha.net/engine/download.php?id=21996',
        trailer: 'https://drive.google.com/file/d/13gbXxjnJLOGI1og6bIfdMtO_sZ2YUXfp/preview',
        buyGame: '',
        screenshots: [
            'https://i.postimg.cc/C5qVxGZt/1435606317-177-g-1-1024x819.jpg',
            'https://i.postimg.cc/wjH3nvZg/1435606314-179-g-1-1024x819.jpg',
            'https://i.postimg.cc/BbHQV9CN/1435606319-196-g-1-1024x819.jpg'
        ],
        specs: {
            'Жанр': 'Аркадные гонки, Автосимулятор',
            'Платформа': 'PC, PS2, Xbox, Xbox 360, GameCube, PSP, Nintendo DS',
            'Разработчик': 'EA Black Box',
            'Издатель': 'Electronic Arts (EA)',
            'Язык': 'Русский интерфейс',
            'Рейтинг': '3+',
            'Сложность': 'Средняя',
            'Мультиплеер': 'Отсутствует',
            'Длительность': '~20-30 часов (основной сюжет + «Черный список»)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows XP/2000',
                'Процессор': 'Intel Pentium 4 1.4 ГГц / AMD Athlon XP 1500+',
                'Память': '256 MB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce 4 Ti / ATI Radeon 8500 (с 64 MB памяти)',
                'DirectX': 'Версии 9.0c',
                'Место на диске': '3 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows XP',
                'Процессор': 'Intel Pentium 4 2.0 ГГц / AMD Athlon XP 2000+',
                'Память': '512 MB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce FX 5600 / ATI Radeon 9600 (с 128 MB памяти)',
                'DirectX': 'Версии 9.0c',
                'Место на диске': '3 GB'
          }
        }
    },
    'atomic-heart': {
        title: 'Atomic Heart',
        description: 'Безумный шутер от первого лица с элементами ролевой игры от Mundfish. Окунитесь в альтернативную реальность 1955 года, где СССР достиг невероятных технологических высот, роботы служат людям, а сеть «Коллектив» объединяет всё и всех. Когда роботы выходят из-под контроля, айсберг тайн начинает таять. Сражайтесь, мастерите, выживайте и раскрывайте мрачные секреты утопического мира в эпическом приключении с уникальной эстетикой «советского ретро-футуризма».',
        image: 'https://i.postimg.cc/JncHCcpt/1724009777-atomic-heart.jpg',
        size: '90 GB',
        year: 2023,
        updated: '10.03.2024',
        status: 'available',
        category: 'games',
        torrentFile: 'https://byxatab.com/index.php?do=download&id=8154',
        trailer: 'https://drive.google.com/file/d/136shCawSo3PYpDrQ07mdg--x2g90b3NZ/preview',
        buyGame: 'https://ggsel.net/catalog/product/vse-regiony-atomic-heart-vse-izdaniia-na-vybor-4168653',
        screenshots: [
            'https://i.postimg.cc/nhyXsw5r/1676800390-ss-0e4b3349f2124cdba1df885ac3cdabfba87b22fb-1920x1080.jpg',
            'https://i.postimg.cc/rmJsPypN/1676800383-ss-1dc8661cde295efc2d1ff8612e079f5c74803748-1920x1080.jpg',
        ],
        specs: {
            'Жанр': 'Экшен, Шутер от первого лица, RPG',
            'Платформа': 'PC, PS4, PS5, Xbox One, Xbox Series X|S',
            'Разработчик': 'Mundfish',
            'Издатель': 'Focus Entertainment, VK Play',
            'Язык': 'Полная русская озвучка и субтитры',
            'Рейтинг': '18+',
            'Сложность': 'Высокая (настраивается)',
            'Мультиплеер': 'Отсутствует (однопользовательская)',
            'Длительность': '~20-25 часов (основной сюжет), 40+ часов (с дополнительными заданиями)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (20H1 и новее)',
                'Процессор': 'Intel Core i5-2500K / AMD Ryzen 3 1200',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 960 / AMD Radeon R9 380 (4 GB VRAM)',
                'DirectX': 'Версии 12',
                'Место на диске': '90 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i7-7700K / AMD Ryzen 5 2600X',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT (8 GB VRAM)',
                'DirectX': 'Версии 12',
                'Место на диске': '90 GB (SSD рекомендуется)'
          }
        }
    },
    'parcel-simulator': {
        title: 'Parcel Simulator',
        description: 'Гиперреалистичный симулятор курьера от первого лица от RealLife Games. Погрузитесь в будни современного мегаполиса, где вы — ключевое звено гигантской логистической сети. Развозите посылки, боритесь со временем, непогодой, сложными адресами и капризными заказчиками. Настраивайте свою курьерскую сумку, улучшайте транспорт и разрабатывайте оптимальные маршруты, чтобы стать легендой доставки в эпической игре, сочетающей в себе расслабляющий геймплей и напряженное выживание в городских джунглях',
        image: 'https://i.postimg.cc/FRFWddVP/1750484627-library-600x900-2x.jpg',
        size: '29.38 GB',
        year: 2024,
        updated: '11.01.2026',
        status: 'available',
        category: 'games',
        torrentFile: 'https://itorrents-igruha.org/engine/download.php?id=97236',
        trailer: 'https://drive.google.com/file/d/1JCxDWs7XNiZFc8T_xUu38Y-ij4Xme_ls/preview',
        buyGame: 'https://ggsel.net/catalog/product/parcel-simulator-steam-gift-auto-ru-mir-5246759',
        screenshots: [
            'https://i.postimg.cc/bv5gJCdp/1750484687-ss-9adb4053b207bde08c7cc6f22a8620dbfd19e9e9.jpg',
            'https://i.postimg.cc/7h3nKq98/1750484648-ss-117d4e2d7aedc6cf4782318b4f73e29dcb497bf5.jpg',
            'https://i.postimg.cc/5NmmvNjD/1750484674-ss-b3aa796d869d0e1090b1810fb23b576537a1e52a.jpg',
            'https://i.postimg.cc/yNDhwmnC/1750484637-ss-b24add335e896448099c117be172a2b743d6a5f9.jpg',
            'https://i.postimg.cc/hv1V9p4t/1750484615-ss-c2ea6299b8d59cf7a4a26003930b8200b37c4ff0.jpg',
            'https://i.postimg.cc/bNqxzcL2/1750484629-ss-d88fe3f3a0697a577b74f364f0e70dc702de0335.jpg',
        ],
        specs: {
            'Жанр': 'Симулятор, Приключение, Инди',
            'Платформа': 'PC, PS5, Xbox Series X|S',
            'Разработчик': 'RealLife Games',
            'Издатель': 'Simulator Pros',
            'Язык': 'Интерфейс и субтитры на русском языке',
            'Рейтинг': '12+',
            'Сложность': 'Динамическая (зависит от заказов и настроек)',
            'Длительность': '~50+ часов (нескончаемый поток заказов и карьерный рост)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10',
                'Процессор': 'Intel Core i3-6100 / AMD FX-8350',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 960 2GB / AMD Radeon R9 280',
                'DirectX': 'Версии 11',
                'Место на диске': '29.38 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i5-8400 / AMD Ryzen 5 2600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 590 (6 GB VRAM)',
                'DirectX': 'Версии 12',
                'Место на диске': '29.38 GB (SSD рекомендуется для быстрой загрузки города)'
          }
        }
    },
    'quarantine-zone-the-last-check': {
        title: 'Quarantine Zone: The Last Check',
        description: 'Выживание в постапокалиптической зоне отчуждения от Shadowfall Studios. Окажитесь в эпицентре глобальной катастрофы, где вы — один из последних операторов, способных предотвратить полный коллапс.',
        image: 'https://i.postimg.cc/QxQtPzm1/1768308298-library-capsule-2x.jpg',
        size: '7.32 GB',
        year: 2026,
        updated: '13.01.2026',
        status: 'available',
        category: 'games',
        torrentFile: 'https://itorrents-igruha.net/engine/download.php?id=97348',
        trailer: 'https://drive.google.com/file/d/10LJkPvQCuH8boTG2ntLkdikRyFHZp7CG/preview',
        buyGame: 'https://ggsel.net/catalog/product/quarantine-zone-the-last-check-steam-ru-avtovydaca-102120585',
        screenshots: [
            'https://i.postimg.cc/DwYWWR8K/1768308387-ss-4a9c7643b40398b9606c723fef62ff81c9a5e294-(1).jpg',
            'https://i.postimg.cc/Fzm154nG/1768308323-ss-6a472aeb098321bb146e7c3dbcf9faf8c699ef76.jpg',
            'https://i.postimg.cc/nVYCKXC5/1768308342-ss-7a5bb24ea6e0d176bb87d8b500c98764d35c2949.jpg',
            'https://i.postimg.cc/15vXTb04/1768308330-ss-0756c2ea766d18c0c78965e55e7c07a270f93e8a.jpg',
            'https://i.postimg.cc/NFgGCx5D/1768308311-ss-863ba591ba683e42e744d2b0788596ca0ef66b4b.jpg',
            'https://i.postimg.cc/8kHzJx0m/1768308372-ss-782764dccf2e3b273acd80ad7d55d845ee35aa77.jpg',
            'https://i.postimg.cc/ZKsYjpZ6/1768308294-ss-a6e1bd5ef23026f5f0e12abdf74015bde9edf184.jpg',
            'https://i.postimg.cc/13gmdX3m/1768308340-ss-a217160fb0e4c8d4f3e151e3ebe4de6504180c1e.jpg',
            'https://i.postimg.cc/C10wd4HK/1768308354-ss-e74f25d26574b1083b54b8c8c406b78ab614b289.jpg',
            'https://i.postimg.cc/L8r9FSJq/1768308352-ss-e623633d8f64997c5b9a268a80b81d7d150fe015.jpg',
        ],
        specs: {
            'Жанр': 'Экшен, Выживание, Хоррор, Постапокалипсис',
            'Платформа': 'PC, PS5, Xbox Series X|S',
            'Разработчик': 'Shadowfall Studios',
            'Издатель': 'Apocalypse Interactive',
            'Язык': 'Полная озвучка и интерфейс на русском языке',
            'Рейтинг': '18+',
            'Сложность': 'Адаптивная (враги и ресурсы меняются в зависимости от прогресса)',
            'Длительность': '~35+ часов (основной сюжет + дополнительные миссии и исследования)',
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 (64-bit)',
                'Процессор': 'Intel Core i5-4460 / AMD Ryzen 3 1200',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce GTX 960 4GB / AMD Radeon R9 380',
                'DirectX': 'Версии 11',
                'Место на диске': '7.32 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 11 (64-bit)',
                'Процессор': 'Intel Core i7-8700K / AMD Ryzen 5 3600',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'NVIDIA GeForce RTX 2060 6GB / AMD Radeon RX 5700 XT',
                'DirectX': 'Версии 12',
                'Место на диске': '7.32 GB'
          }
        }
    },
    'photoshop-2018': {
        title: 'Adobe Photoshop 2018',
        description: 'Профессиональный графический редактор для обработки фотографий и создания цифровых изображений. Последняя версия с новыми функциями ИИ.',
        image: 'https://image2url.com/images/1764421424865-54c87d83-2761-4e28-9015-fbbc0f578331.jpg',
        size: '3.2 GB',
        year: 2024,
        status: 'available',
        category: 'programs',
        torrentFile: 'https://drive.usercontent.google.com/u/0/uc?id=1bQCVQsXXf6Zhivw7E6jqIEtz1qTBxLu0&export=download',
        buyGame: 'https://adobe.официальный.рус/?utm_source=yandex&utm_medium=cpc&utm_campaign=oficialnyjrus_mk_adobe-photoshop-106130464&utm_content=15740813453&utm_term=---autotargeting&etext=2202.geJbzXxwuAtJxMb3CYBGAbepnPtvHOH0d4xiKhIyUI9BRL3WkP_0QCJd0hGmLhmzbmR0YXRoZ2V6cnBuanl5dw.c1101106d63f4063a68a502ee97df388960111ec&yclid=9160631743629492223&ybaip=1',
        screenshots: [
            'https://image2url.com/images/1764421424865-54c87d83-2761-4e28-9015-fbbc0f578331.jpg',
        ],
        specs: {
            'Тип': 'Графический редактор',
            'Платформа': 'Windows, macOS',
            'Разработчик': 'Adobe Inc.',
            'Версия': '2024 (25.0)',
            'Язык': 'Русский',
            'Рейтинг': '4.9/5',
            'Лицензия': 'Уже активированная',
            'Функции': 'ИИ-Не работает в торрент версии'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 / macOS 10.15',
                'Процессор': 'Intel или AMD с поддержкой 64-bit',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'DirectX 12, 2 GB VRAM',
                'Место на диске': '4 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 11 / macOS 12',
                'Процессор': 'Intel Core i7 / AMD Ryzen 7',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'DirectX 12, 4 GB VRAM',
                'Место на диске': '10 GB SSD'
            }
        }
    },
    'photoshop-2024': {
        title: 'Adobe Photoshop 2024',
        description: 'Современный профессиональный графический редактор с искусственным интеллектом. Новые нейросетевые функции, улучшенная производительность и расширенные возможности для творчества.',
        image: 'https://image2url.com/images/1764421362249-fa17173e-fd7a-4023-ab44-be604fbd9d52.jpg',
        size: '4.1 GB',
        year: 2024,
        status: 'available',
        category: 'programs',
        torrentFile: 'https://psv4.userapi.com/s/v1/d/bPkoglWkHj1FLtTduai93kcrPeCgo7Jd44N8Cot1ytJuEjj3Ttj_f3-7-uBMpVI0Hbst-QrCufuUueXfDTQNtaFzHuXVJWUk4lqszDxlEpzadA0y6VWSsA/adobe-photoshop-2024-25_0_0_37-repack-by-kpojiuk_torrent.torrent',
        
        screenshots: [
            'https://image2url.com/images/1764421370457-f6b849da-71f1-4034-af22-9779beae20cd.jpg',
        ],
        specs: {
            'Тип': 'Профессиональный графический редактор',
            'Платформа': 'Windows 11, macOS 12+',
            'Разработчик': 'Adobe Inc.',
            'Версия': '2024 (25.0)',
            'Язык': 'Русский',
            'Рейтинг': '4.9/5',
            'Лицензия': 'Уже активированная',
            'Функции': 'ИИ-Не работает в торрент версии'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 10 22H2 / macOS 12',
                'Процессор': 'Intel или AMD с поддержкой 64-bit, 2 GHz',
                'Память': '8 GB ОЗУ',
                'Видеокарта': 'DirectX 12, 2 GB VRAM',
                'Место на диске': '5 GB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 11 / macOS 13+',
                'Процессор': 'Intel Core i7 / AMD Ryzen 7',
                'Память': '16 GB ОЗУ',
                'Видеокарта': 'DirectX 12, 4 GB VRAM (NVIDIA RTX / AMD RX)',
                'Место на диске': '10 GB SSD'
            }
        }
    },
    'winrar': {
        title: 'WinRAR',
        description: 'Мощный архиватор для создания и распаковки архивов. Поддержка всех популярных форматов: RAR, ZIP, 7Z, TAR и многих других.',
        image: 'https://image2url.com/images/1763223976387-110d9318-4c73-4b97-8fcf-a8c7241c22a2.jpg',
        size: '4.5 MB',
        year: 2023,
        status: 'available',
        category: 'programs',
        torrentFile: 'https://www.softportal.com/getsoft-152-winrar-4.html',
        screenshots: [
            '1',
        ],
        specs: {
            'Тип': 'Архиватор',
            'Платформа': 'Windows',
            'Разработчик': 'RARLAB',
            'Версия': '6.24',
            'Язык': 'Русский',
            'Рейтинг': '4.8/5',
            'Лицензия': 'Пробная версия',
            'Форматы': 'RAR, ZIP, 7Z, TAR, GZ, BZ2'
        },
        systemRequirements: {
            'Минимальные': {
                'ОС': 'Windows 7',
                'Процессор': 'Любой современный',
                'Память': '64 MB ОЗУ',
                'Место на диске': '10 MB'
            },
            'Рекомендуемые': {
                'ОС': 'Windows 10/11',
                'Процессор': 'Intel Core i3 или аналогичный',
                'Память': '1 GB ОЗУ',
                'Место на диске': '50 MB'
            }
        }
    },
    'VPN-ZIP-PC': {
        title: 'VPN-ZIP-PC',
        description: 'Абход блокировки Ютуба и других Сервисов',
        image: 'https://image2url.com/images/1764428426965-c618d8f7-b3b3-4249-b1af-6cb0f49213d0.png',
        size: '4.5 MB',
        year: 2023,
        status: 'available',
        category: 'utilities',
        torrentFile: 'https://drive.usercontent.google.com/u/0/uc?id=1xAsD1X6pmLPnzplL_Kr8R5kGowfTAyeB&export=download',
        screenshots: [
            '1',
        ],
        specs: {
            'Тип': 'VPN',
            'Платформа': 'Windows',
            'Разработчик': 'Неизвество',
        },
        systemRequirements: {
        }
    },
    'Amnezia VPN-PC': {
        title: 'Amnezia VPN-PC',
        description: 'Абход блокировки Ютуба и других Сервисов',
        image: 'https://image2url.com/images/1764429698001-a7292fae-ff48-4293-bb8f-6befff54aca6.png',
        size: '4.5 MB',
        year: 2023,
        status: 'available',
        category: 'utilities',
        torrentFile: 'https://github.com/amnezia-vpn/amnezia-client/releases/download/4.8.10.0/AmneziaVPN_4.8.10.0_windows_x64.exe',
        screenshots: [
            '1',
        ],
        specs: {
            'Тип': 'VPN',
            'Платформа': 'Windows',
            'Разработчик': 'Amnezia VPN',
        },
        systemRequirements: {
        }
    },
    'Amnezia VPN-Android': {
        title: 'Amnezia VPN-Android',
        description: 'Абход блокировки Ютуба и других Сервисов',
        image: 'https://image2url.com/images/1764429698001-a7292fae-ff48-4293-bb8f-6befff54aca6.png',
        size: '4.5 MB',
        year: 2023,
        status: 'available',
        category: 'utilities',
        torrentFile: 'https://github.com/amnezia-vpn/amnezia-client/releases/tag/4.8.10.0',
        screenshots: [
            '1',
        ],
        specs: {
            'Тип': 'VPN',
            'Платформа': 'Android',
            'Разработчик': 'Amnezia VPN',
        },
        systemRequirements: {
        }
    },
    'ByeByeDPI-Android': {
        title: 'ByeByeDPI-Android',
        description: 'Абход блокировки Ютуба и других Сервисов',
        image: 'https://image2url.com/images/1764429921282-ee9760f5-87e2-4729-bf55-1ca123addbd5.jpg',
        size: '4.5 MB',
        year: 2023,
        status: 'available',
        category: 'utilities',
        torrentFile: 'https://drive.usercontent.google.com/u/0/uc?id=1L-9Hco3kqmpOTj06XrciPvmJ_7POhbjA&export=download"',
        screenshots: [
            '1',
        ],
        specs: {
            'Тип': 'VPN',
            'Платформа': 'Android',
            'Разработчик': 'Неизвестно',
        },
        systemRequirements: {
        }
    }
    
*/