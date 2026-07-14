import React, { useState, useEffect, useRef } from 'react';
import { removeBackground } from '@imgly/background-removal';

const GITHUB_PAGES_BASE_URL = 'https://boboyoii.github.io/closet-images/images';

const INITIAL_ITEMS = [
  {
    id: 'c1-bag',
    name: '오타이 미니백',
    category: 'Bags',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_bag_otai.png`,
    brand: '오타이',
    vibes: ['casual', 'romantic', 'formal', 'travel'],
  },
  {
    id: 'c1-bottom',
    name: '미레코 오버 테이퍼드 하의',
    category: 'Bottoms',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_bottom_mireco.png`,
    brand: '미레코',
    vibes: ['casual', 'formal', 'work'],
  },
  {
    id: 'c1-necklace',
    name: '넘버링 실버 목걸이',
    category: 'Accessories',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_necklace_numbering.png`,
    brand: '넘버링',
    vibes: ['romantic', 'formal', 'travel'],
  },
  {
    id: 'c1-shoes',
    name: '에퓨레 미니멀 레더 슈즈',
    category: 'Shoes',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_shoes_epure.png`,
    brand: '에퓨레',
    vibes: ['casual', 'formal', 'work'],
  },
  {
    id: 'c1-top',
    name: '프로젝트웨이브 슬리브리스',
    category: 'Tops',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_top_projectwave.png`,
    brand: '프로젝트웨이브',
    vibes: ['casual', 'sporty', 'travel'],
  },
  {
    id: 'c1-watch',
    name: '카시오 클래식 메탈 시계',
    category: 'Accessories',
    src: `${GITHUB_PAGES_BASE_URL}/outfit1_watch_casio.png`,
    brand: '카시오',
    vibes: ['casual', 'formal', 'work'],
  },

  {
    id: 'c2-bag',
    name: '오피쉬 가죽 버킷백',
    category: 'Bags',
    src: `${GITHUB_PAGES_BASE_URL}/outfit2_bag_opish.png`,
    brand: '오피쉬',
    vibes: ['casual', 'romantic'],
  },
  {
    id: 'c2-bottom',
    name: '플레이스스튜디오 와이드 진',
    category: 'Bottoms',
    src: `${GITHUB_PAGES_BASE_URL}/outfit2_bottom_placestudio.png`,
    brand: '플레이스스튜디오',
    vibes: ['casual', 'sporty', 'travel'],
  },
  {
    id: 'c2-hat',
    name: '바우프 시그니처 볼캡',
    category: 'Accessories',
    src: `${GITHUB_PAGES_BASE_URL}/outfit2_hat_bauf.png`,
    brand: '바우프',
    vibes: ['casual', 'sporty', 'travel'],
  },
  {
    id: 'c2-shoes',
    name: '야세 플랫폼 로퍼',
    category: 'Shoes',
    src: `${GITHUB_PAGES_BASE_URL}/outfit2_shoes_socks_yase.png`,
    brand: '야세',
    vibes: ['casual', 'formal', 'work'],
  },
  {
    id: 'c2-top',
    name: '일리고 크롭 롱슬리브',
    category: 'Tops',
    src: `${GITHUB_PAGES_BASE_URL}/outfit2_top_illigo.png`,
    brand: '일리고',
    vibes: ['casual', 'sporty'],
  },

  {
    id: 'c3-bag',
    name: '미세키서울 패디드 미니백',
    category: 'Bags',
    src: `${GITHUB_PAGES_BASE_URL}/outfit3_bag_misekiseoul_bag.png`,
    brand: '미세키서울',
    vibes: ['casual', 'romantic'],
  },
  {
    id: 'c3-bottom',
    name: '이와이이알 스트링 슬랙스',
    category: 'Bottoms',
    src: `${GITHUB_PAGES_BASE_URL}/outfit3_bottom_iwaiial.png`,
    brand: '이와이이알',
    vibes: ['casual', 'formal', 'work'],
  },
  {
    id: 'c3-glasses',
    name: '한글 뿔테 데일리 안경',
    category: 'Accessories',
    src: `${GITHUB_PAGES_BASE_URL}/outfit3_glasses_hangeul.png`,
    brand: '한글',
    vibes: ['casual', 'formal', 'work'],
  },
  {
    id: 'c3-shoes',
    name: '락피쉬웨더웨어 리본 플랫',
    category: 'Shoes',
    src: `${GITHUB_PAGES_BASE_URL}/outfit3_shoes_rockfishweatherwear.png`,
    brand: '락피쉬웨더웨어',
    vibes: ['romantic', 'casual'],
  },
  {
    id: 'c3-top',
    name: '미세키서울 언밸런스 니트탑',
    category: 'Tops',
    src: `${GITHUB_PAGES_BASE_URL}/outfit3_top_misekiseoul.png`,
    brand: '미세키서울',
    vibes: ['romantic', 'formal', 'work'],
  },

  {
    id: 'c4-bag',
    name: '일리고 메탈릭 레더백',
    category: 'Bags',
    src: `${GITHUB_PAGES_BASE_URL}/outfit4_bag_illigo.png`,
    brand: '일리고',
    vibes: ['casual', 'sporty', 'travel'],
  },
  {
    id: 'c4-bottom',
    name: '시너진 와이드 컷아웃 데님',
    category: 'Bottoms',
    src: `${GITHUB_PAGES_BASE_URL}/outfit4_bottom_sinnerjean.png`,
    brand: '시너진',
    vibes: ['casual', 'sporty'],
  },
  {
    id: 'c4-headband',
    name: '애즈유아 니티드 헤어밴드',
    category: 'Accessories',
    src: `${GITHUB_PAGES_BASE_URL}/outfit4_headband_asyoua.png`,
    brand: '애즈유아',
    vibes: ['casual', 'romantic'],
  },
  {
    id: 'c4-shoes',
    name: '오찌 스니커 벌키 슈즈',
    category: 'Shoes',
    src: `${GITHUB_PAGES_BASE_URL}/outfit4_shoes_ozzi.png`,
    brand: '오찌',
    vibes: ['casual', 'sporty'],
  },
  {
    id: 'c4-top',
    name: '팬시클럽 컷아웃 홀터탑',
    category: 'Tops',
    src: `${GITHUB_PAGES_BASE_URL}/outfit4_top_fancyclub.png`,
    brand: '팬시클럽',
    vibes: ['romantic', 'sporty'],
  },
];

const CATEGORIES = [
  { id: 'All', label: '전체' },
  { id: 'Tops', label: '상의' },
  { id: 'Bottoms', label: '하의' },
  { id: 'Shoes', label: '신발' },
  { id: 'Bags', label: '가방' },
  { id: 'Accessories', label: '액세서리' },
];

const FASHION_AI_LABELS = [
  { prompt: 'a t-shirt or casual shirt', name: '티셔츠', category: 'Tops' },
  {
    prompt: 'a blouse or dress shirt',
    name: '블라우스 셔츠',
    category: 'Tops',
  },
  {
    prompt: 'a sweater, knit top or cardigan',
    name: '니트 가디건',
    category: 'Tops',
  },
  { prompt: 'a jacket or coat', name: '재킷 코트', category: 'Tops' },
  { prompt: 'pants or trousers', name: '팬츠', category: 'Bottoms' },
  { prompt: 'jeans or denim pants', name: '데님 팬츠', category: 'Bottoms' },
  { prompt: 'a skirt', name: '스커트', category: 'Bottoms' },
  { prompt: 'sneakers or athletic shoes', name: '스니커즈', category: 'Shoes' },
  { prompt: 'loafers or dress shoes', name: '로퍼 슈즈', category: 'Shoes' },
  { prompt: 'boots', name: '부츠', category: 'Shoes' },
  { prompt: 'sandals or high heels', name: '샌들 슈즈', category: 'Shoes' },
  { prompt: 'a handbag or tote bag', name: '토트백', category: 'Bags' },
  {
    prompt: 'a shoulder bag or crossbody bag',
    name: '숄더백',
    category: 'Bags',
  },
  { prompt: 'a backpack', name: '백팩', category: 'Bags' },
  { prompt: 'a wristwatch', name: '손목시계', category: 'Accessories' },
  { prompt: 'eyeglasses or sunglasses', name: '안경', category: 'Accessories' },
  {
    prompt: 'a necklace, bracelet or jewelry',
    name: '주얼리',
    category: 'Accessories',
  },
  { prompt: 'a hat or baseball cap', name: '모자', category: 'Accessories' },
  {
    prompt: 'a scarf, belt or fashion accessory',
    name: '패션 액세서리',
    category: 'Accessories',
  },
];

const VIBES = [
  { id: 'casual', label: '일상' },
  { id: 'romantic', label: '데이트 / 약속' },
  { id: 'formal', label: '격식 있는 자리' },
  { id: 'sporty', label: '야외 활동' },
  { id: 'work', label: '출근 / 미팅' },
  { id: 'travel', label: '여행 / 휴가' },
];

const KOREAN_REGIONS = [
  '경기도 성남시 분당구',
  '경기도 성남시 수정구',
  '경기도 성남시 중원구',
  '서울특별시 강남구',
  '서울특별시 서초구',
  '서울특별시 송파구',
  '서울특별시 마포구',
  '서울특별시 용산구',
  '서울특별시 성동구',
  '서울특별시 종로구',
  '서울특별시 중구',
  '서울특별시 강동구',
  '서울특별시 강서구',
  '서울특별시 영등포구',
  '서울특별시 서대문구',
  '서울특별시 성북구',
  '서울특별시 동작구',
  '서울특별시 관악구',
];

const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yyyy = tomorrow.getFullYear();
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const dd = String(tomorrow.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getTarget21DateString = () => {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  return `${yyyy}-${mm}-21`;
};

const cleanWord = (word) => {
  if (!word) return '';
  const filtered = word.trim();
  if (
    filtered.endsWith('구로구') ||
    filtered.endsWith('종로구') ||
    filtered === '종로' ||
    filtered === '구로'
  ) {
    return filtered;
  }
  if (filtered.endsWith('로') || filtered.endsWith('길')) {
    return '';
  }
  return filtered;
};

function SafeImage({ src, alt, className }) {
  const [hasError, setHasError] = useState(false);
  return hasError ? (
    <div
      className={`flex items-center justify-center bg-zinc-100 text-zinc-400 rounded-lg ${className}`}
    >
      <span className="text-[10px] font-medium tracking-tighter">ITEM</span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default function App() {
  const [tab, setTab] = useState('recommendation');

  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('closet_items_v2');
      return saved ? JSON.parse(saved) : INITIAL_ITEMS;
    } catch (e) {
      return INITIAL_ITEMS;
    }
  });

  const [category, setCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState('selection');
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectionBoxes, setSelectionBoxes] = useState([]);
  const [activeBox, setActiveBox] = useState(null);
  const [processedItems, setProcessedItems] = useState([]);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [baseItem, setBaseItem] = useState(null);

  // AI 분석 모드 관련 상태
  const [isAiScanning, setIsAiScanning] = useState(false);
  const [aiScanPercent, setAiScanPercent] = useState(0);
  const [aiScanStatus, setAiScanStatus] = useState('');

  const [newItemInfo, setNewItemInfo] = useState({
    name: '',
    brand: '',
    category: 'Tops',
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    brand: '',
    category: 'Tops',
  });
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // 다중 삭제 관련 상태
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedDeleteIds, setSelectedDeleteIds] = useState([]);

  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // 팝업 활성화 시 뒷 배경화면 스크롤 고정 효과
  useEffect(() => {
    if (isModalOpen || isEditModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isEditModalOpen]);

  const showFeedback = (msg) => {
    setFeedbackMessage(msg);
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 2500);
  };

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const selectionAreaRef = useRef(null);
  const aiScanTargetRef = useRef(0);
  const aiScanDisplayedRef = useRef(0);
  const fashionClassifierRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isAiScanning) return undefined;
    const timer = window.setInterval(() => {
      // 다운로드 콜백이 잠시 멈춰도 초반은 빠르게, 후반은 천천히 90%까지 계속 전진한다.
      if (aiScanTargetRef.current < 90) {
        const target = aiScanTargetRef.current;
        const pace = target < 25 ? 0.58 : target < 70 ? 0.24 : 0.08;
        aiScanTargetRef.current = Math.min(90, target + pace);
      }
      setAiScanPercent((previous) => {
        const target = aiScanTargetRef.current;
        if (previous >= target) return previous;
        const next = Math.min(
          target,
          previous + Math.max(0.28, (target - previous) * 0.075),
        );
        aiScanDisplayedRef.current = next;
        return next;
      });
    }, 50);
    return () => window.clearInterval(timer);
  }, [isAiScanning]);

  const [detectedLocation, setDetectedLocation] = useState('경기도 성남시');
  const [locationNotice, setLocationNotice] = useState('');
  const [locationSource, setLocationSource] = useState('default');

  const [recommendation, setRecommendation] = useState({
    date: getTomorrowDateString(),
    location: '경기도 성남시',
    situation: '',
    vibe: 'casual',
  });
  const [outfits, setOutfits] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isSearchingLocation, setIsSearchingLocation] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const getInitialCalendarEvents = () => {
    const day21 = getTarget21DateString();
    return {
      [day21]: {
        id: 'mock-21',
        location: '서울특별시 강남구 신사동',
        situation: '민아랑 저녁 약속',
        vibe: 'romantic',
        items: [
          {
            id: 'c3-top',
            name: '미세키서울 언밸런스 니트탑',
            category: 'Tops',
            src: `${GITHUB_PAGES_BASE_URL}/outfit3_top_misekiseoul.png`,
            brand: '미세키서울',
          },
          {
            id: 'c3-bottom',
            name: '이와이이알 스트링 슬랙스',
            category: 'Bottoms',
            src: `${GITHUB_PAGES_BASE_URL}/outfit3_bottom_iwaiial.png`,
            brand: '이와이이알',
          },
          {
            id: 'c3-shoes',
            name: '락피쉬웨더웨어 리본 플랫',
            category: 'Shoes',
            src: `${GITHUB_PAGES_BASE_URL}/outfit3_shoes_rockfishweatherwear.png`,
            brand: '락피쉬웨더웨어',
          },
          {
            id: 'c3-bag',
            name: '미세키서울 패디드 미니백',
            category: 'Bags',
            src: `${GITHUB_PAGES_BASE_URL}/outfit3_bag_misekiseoul_bag.png`,
            brand: '미세키서울',
          },
        ],
      },
    };
  };

  const [calendarEvents, setCalendarEvents] = useState(() => {
    try {
      const saved = localStorage.getItem('closet_calendar_v1');
      const mockEvents = getInitialCalendarEvents();
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...mockEvents, ...parsed };
      }
      return mockEvents;
    } catch (e) {
      return getInitialCalendarEvents();
    }
  });

  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(
    getTomorrowDateString(),
  );

  useEffect(() => {
    localStorage.setItem('closet_items_v2', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('closet_calendar_v1', JSON.stringify(calendarEvents));
  }, [calendarEvents]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const day21Str = getTarget21DateString();

    if (newDate === day21Str) {
      const match =
        calendarEvents[day21Str] || getInitialCalendarEvents()[day21Str];
      setRecommendation((prev) => ({
        ...prev,
        date: newDate,
        location: match.location || '서울특별시 강남구 신사동',
        situation: match.situation || '민아랑 저녁 약속',
        vibe: match.vibe || 'romantic',
      }));
      showFeedback('일정을 불러왔어요.');
    } else {
      setRecommendation((prev) => ({
        ...prev,
        date: newDate,
        location: detectedLocation,
        situation: '',
        vibe: prev.vibe || 'casual',
      }));
    }
  };

  useEffect(() => {
    fetchCurrentLocation(true);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      const query = recommendation.location.trim();
      if (query.length < 2) {
        setLocationSuggestions([]);
        return;
      }
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=kr&limit=5&addressdetails=1`,
          { headers: { 'Accept-Language': 'ko-KR,ko;q=0.9' } },
        );
        const data = await response.json();
        if (data && Array.isArray(data)) {
          setLocationSuggestions(data);
        }
      } catch (err) {
        console.error('Failed auto-complete lookup', err);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [recommendation.location]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredItems =
    category === 'All' ? items : items.filter((it) => it.category === category);

  const getCategoryCount = (catId) => {
    if (catId === 'All') return items.length;
    return items.filter((it) => it.category === catId).length;
  };

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generateOutfits = () => {
    const lowTemps = [10, 12, 14, 16, 18];
    const low = lowTemps[Math.floor(Math.random() * lowTemps.length)];
    const high = low + Math.floor(Math.random() * 5) + 6;

    const conditions = ['맑음', '흐림', '약간 흐림'];
    setWeatherData({
      lowTemp: low,
      highTemp: high,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      location: recommendation.location || detectedLocation,
    });

    const targetVibe = recommendation.vibe || 'casual';

    const getVibeFilteredPool = (cat) => {
      const allCatItems = items.filter((i) => i.category === cat);
      let matchedVibes = [targetVibe];
      if (targetVibe === 'romantic') matchedVibes.push('social');
      if (targetVibe === 'sporty') matchedVibes.push('fitness');

      const vibeMatched = allCatItems.filter(
        (i) => i.vibes && i.vibes.some((v) => matchedVibes.includes(v)),
      );
      return vibeMatched.length >= 3
        ? shuffleArray(vibeMatched)
        : shuffleArray(allCatItems);
    };

    const shuffledTops = getVibeFilteredPool('Tops');
    const shuffledBottoms = getVibeFilteredPool('Bottoms');
    const shuffledShoes = getVibeFilteredPool('Shoes');
    const shuffledBags = getVibeFilteredPool('Bags');
    const shuffledAccessories = getVibeFilteredPool('Accessories');

    const newOutfits = [1, 2, 3].map((id) => {
      const index = id - 1;

      const getUniqueItem = (shuffledPool, originalCategory, idx) => {
        if (baseItem && baseItem.category === originalCategory) {
          return baseItem;
        }

        if (shuffledPool.length === 0) return null;
        if (idx < shuffledPool.length) {
          return shuffledPool[idx];
        }
        const rawList = items.filter((i) => i.category === originalCategory);
        return rawList[Math.floor(Math.random() * rawList.length)];
      };

      const outfitItems = [
        getUniqueItem(shuffledTops, 'Tops', index),
        getUniqueItem(shuffledBottoms, 'Bottoms', index),
        getUniqueItem(shuffledShoes, 'Shoes', index),
        getUniqueItem(shuffledBags, 'Bags', index),
        getUniqueItem(shuffledAccessories, 'Accessories', index),
      ].filter(Boolean);

      return { id, items: outfitItems };
    });

    setOutfits(newOutfits);
    setSelectedOutfit(null);
  };

  const fetchCurrentLocation = async (isInitial = false) => {
    const defaultLocation = '경기도 성남시';
    const applyLocation = (location, source, notice = '') => {
      setDetectedLocation(location);
      setRecommendation((prev) => ({ ...prev, location }));
      setLocationSource(source);
      setLocationNotice(notice);
    };
    const parseBigDataCloud = (data) => {
      const province = cleanWord(data?.principalSubdivision || '');
      const city = cleanWord(data?.city || data?.locality || '');
      const district = cleanWord(data?.localityInfo?.administrative?.find(
        (item) => item.adminLevel === 6 || item.adminLevel === 7,
      )?.name || '');
      return [...new Set([province, city, district].filter(Boolean))].join(' ').trim();
    };
    const reverseCoordinates = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ko`,
        );
        if (response.ok) {
          const location = parseBigDataCloud(await response.json());
          if (location) return location;
        }
      } catch (error) {
        console.warn('Primary reverse geocoding failed', error);
      }
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=14&addressdetails=1&accept-language=ko`,
      );
      if (!response.ok) throw new Error(`Reverse geocoding failed: ${response.status}`);
      const address = (await response.json())?.address;
      const province = cleanWord(address?.province || address?.state || '');
      const city = cleanWord(address?.city || address?.county || address?.municipality || '');
      const district = cleanWord(
        address?.borough || address?.city_district || address?.suburb || address?.town || '',
      );
      const location = [...new Set([province, city, district].filter(Boolean))].join(' ').trim();
      if (!location) throw new Error('Address parsing failed');
      return location;
    };
    const getPosition = (options) => new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    const tryNetworkLocation = async () => {
      const response = await fetch(
        'https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=ko',
      );
      if (!response.ok) throw new Error('Network location failed');
      const location = parseBigDataCloud(await response.json());
      if (!location) throw new Error('Network address parsing failed');
      return location;
    };

    setIsSearchingLocation(true);
    setLocationNotice('');
    try {
      let position;
      if (!navigator.geolocation) throw new Error('GEOLOCATION_UNAVAILABLE');
      try {
        position = await getPosition({
          enableHighAccuracy: true,
          timeout: 12000,
          maximumAge: 30000,
        });
      } catch (highAccuracyError) {
        console.warn('High accuracy GPS failed; retrying normally', highAccuracyError);
        position = await getPosition({
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 300000,
        });
      }
      const { latitude, longitude, accuracy } = position.coords;
      const location = await reverseCoordinates(latitude, longitude);
      const accuracyNotice = accuracy > 3000
        ? `GPS 오차 범위가 약 ${Math.round(accuracy / 1000)}km예요.`
        : '';
      applyLocation(location, 'gps', accuracyNotice);
      if (!isInitial) showFeedback('현재 GPS 위치가 설정되었어요.');
    } catch (gpsError) {
      console.warn('GPS location failed; trying network location', gpsError);
      try {
        const networkLocation = await tryNetworkLocation();
        applyLocation(
          networkLocation,
          'network',
          'GPS를 사용할 수 없어 네트워크 기반의 대략적인 위치를 표시하고 있어요.',
        );
      } catch (networkError) {
        console.warn('Network location failed', networkError);
        applyLocation(
          defaultLocation,
          'default',
          '현재 위치를 확인하지 못해 기본 위치로 표시하고 있어요.',
        );
      }
    } finally {
      setIsSearchingLocation(false);
    }
  };

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (streamRef.current) {
        stopCamera();
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 640 },
          height: { ideal: 640 },
        },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraActive(true);
    } catch (err) {
      console.error('Camera initial failure', err);
      setCameraError(
        '카메라 장치를 로드할 수 없습니다. 권한 설정을 체크해 주세요.',
      );
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const openBoxSelector = (imageSrc) => {
    setCapturedImage(imageSrc);
    setSelectionBoxes([]);
    setProcessedItems([]);
    setModalStep('boxSelect');
  };

  const pointInSelection = (event) => {
    const rect = selectionAreaRef.current.getBoundingClientRect();
    return {
      x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
    };
  };

  const startBox = (event) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const start = pointInSelection(event);
    setActiveBox({
      startX: start.x,
      startY: start.y,
      x: start.x,
      y: start.y,
      width: 0,
      height: 0,
    });
  };

  const moveBox = (event) => {
    if (!activeBox) return;
    const point = pointInSelection(event);
    setActiveBox((prev) => ({
      ...prev,
      x: Math.min(prev.startX, point.x),
      y: Math.min(prev.startY, point.y),
      width: Math.abs(point.x - prev.startX),
      height: Math.abs(point.y - prev.startY),
    }));
  };

  const finishBox = () => {
    if (!activeBox) return;
    if (activeBox.width > 0.025 && activeBox.height > 0.025) {
      setSelectionBoxes((prev) => [
        ...prev,
        {
          id: `box-${Date.now()}-${prev.length}`,
          x: activeBox.x,
          y: activeBox.y,
          width: activeBox.width,
          height: activeBox.height,
        },
      ]);
    }
    setActiveBox(null);
  };

  const loadImage = (src) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  const canvasToBlob = (canvas) =>
    new Promise((resolve, reject) =>
      canvas.toBlob(
        (blob) =>
          blob
            ? resolve(blob)
            : reject(new Error('이미지 자르기에 실패했어요.')),
        'image/png',
      ),
    );

  const blobToDataUrl = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const getFashionClassifier = async () => {
    if (fashionClassifierRef.current) return fashionClassifierRef.current;
    setAiScanStatus('의류 인식 AI 모델을 준비하고 있어요...');
    const { pipeline } = await import('@huggingface/transformers');
    fashionClassifierRef.current = await pipeline(
      'zero-shot-image-classification',
      'Xenova/clip-vit-base-patch32',
      {
        dtype: 'q8',
        progress_callback: (progress) => {
          if (
            progress?.status === 'progress' &&
            Number.isFinite(progress.progress)
          ) {
            aiScanTargetRef.current = Math.max(
              aiScanTargetRef.current,
              Math.min(78, 45 + progress.progress * 0.33),
            );
          }
        },
      },
    );
    return fashionClassifierRef.current;
  };

  const classifyFashionItemWithAI = async (imageSrc) => {
    const classifier = await getFashionClassifier();
    const prompts = FASHION_AI_LABELS.map((item) => item.prompt);
    const output = await classifier(imageSrc, prompts, {
      hypothesis_template: 'This product is {}',
    });
    const categoryScores = output.reduce((scores, prediction) => {
      const definition = FASHION_AI_LABELS.find(
        (item) => item.prompt === prediction.label,
      );
      if (definition)
        scores[definition.category] =
          (scores[definition.category] || 0) + prediction.score;
      return scores;
    }, {});
    const category =
      Object.entries(categoryScores).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      'Tops';
    const bestMatch = output
      .map((prediction) => ({
        prediction,
        definition: FASHION_AI_LABELS.find(
          (item) => item.prompt === prediction.label,
        ),
      }))
      .filter((match) => match.definition?.category === category)
      .sort((a, b) => b.prediction.score - a.prediction.score)[0];
    return {
      category,
      itemType: bestMatch?.definition?.name || '패션 아이템',
      confidence: Math.round(
        Math.min(99, Math.max(1, (categoryScores[category] || 0) * 100)),
      ),
    };
  };

  const rgbToHsl = (red, green, blue) => {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l: lightness * 100 };
    const delta = max - min;
    const saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    let hue;
    if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0);
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
    return { h: hue * 60, s: saturation * 100, l: lightness * 100 };
  };

  const describeColor = (red, green, blue) => {
    const { h, s, l } = rgbToHsl(red, green, blue);
    if (l < 16) return '매트 블랙';
    if (s < 12 && l < 36) return '차콜 그레이';
    if (s < 12 && l < 72) return '클래식 그레이';
    if (l > 90 && s < 18) return '소프트 화이트';
    if (l > 82 && h >= 35 && h < 70) return '크림 아이보리';
    if (h >= 48 && h < 95 && s < 62 && l < 58) return '올리브 카키';
    if (h >= 95 && h < 165 && l < 42) return '포레스트 그린';
    if (h < 12 || h >= 345) return l < 45 ? '딥 버건디' : '클래식 레드';
    if (h < 35) return l < 48 ? '브릭 브라운' : '웜 오렌지';
    if (h < 65) return '머스타드 옐로우';
    if (h < 165) return l < 48 ? '딥 그린' : '세이지 그린';
    if (h < 200) return '민트 블루';
    if (h < 255) return l < 42 ? '딥 네이비' : '코발트 블루';
    if (h < 290) return '라벤더 퍼플';
    if (h < 345) return l > 68 ? '소프트 핑크' : '마젠타 핑크';
    return '내추럴 컬러';
  };

  const analyzePixelsAndGenerateName = async (imageSrc) => {
    const image = await loadImage(imageSrc);
    const maxSide = 320;
    const scale = Math.min(
      1,
      maxSide / Math.max(image.naturalWidth, image.naturalHeight),
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const clusters = new Map();
    let minX = canvas.width;
    let minY = canvas.height;
    let maxX = -1;
    let maxY = -1;
    let foregroundPixels = 0;
    let foregroundYTotal = 0;
    const rowWidths = new Array(canvas.height).fill(0);

    for (let y = 0; y < canvas.height; y += 1) {
      for (let x = 0; x < canvas.width; x += 1) {
        const offset = (y * canvas.width + x) * 4;
        const red = pixels[offset];
        const green = pixels[offset + 1];
        const blue = pixels[offset + 2];
        const alpha = pixels[offset + 3];
        if (alpha < 80 || (red > 242 && green > 242 && blue > 242)) continue;
        foregroundPixels += 1;
        foregroundYTotal += y;
        rowWidths[y] += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        if ((x + y) % 2 !== 0) continue;
        const key = `${Math.round(red / 32)}-${Math.round(green / 32)}-${Math.round(blue / 32)}`;
        const cluster = clusters.get(key) || {
          count: 0,
          red: 0,
          green: 0,
          blue: 0,
        };
        cluster.count += 1;
        cluster.red += red;
        cluster.green += green;
        cluster.blue += blue;
        clusters.set(key, cluster);
      }
    }

    const dominant = [...clusters.values()].sort(
      (a, b) => b.count - a.count,
    )[0] || { count: 1, red: 128, green: 128, blue: 128 };
    const red = Math.round(dominant.red / dominant.count);
    const green = Math.round(dominant.green / dominant.count);
    const blue = Math.round(dominant.blue / dominant.count);
    const hex = `#${[red, green, blue]
      .map((value) => value.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()}`;
    const silhouetteWidth = Math.max(1, maxX - minX + 1);
    const silhouetteHeight = Math.max(1, maxY - minY + 1);
    const ratio = silhouetteWidth / silhouetteHeight;
    const shapeFill =
      foregroundPixels / Math.max(1, silhouetteWidth * silhouetteHeight);
    const centerOfMassY = foregroundPixels
      ? (foregroundYTotal / foregroundPixels - minY) / silhouetteHeight
      : 0.5;
    const bandAverage = (from, to) => {
      const start = Math.max(minY, Math.round(minY + silhouetteHeight * from));
      const end = Math.min(maxY + 1, Math.round(minY + silhouetteHeight * to));
      const band = rowWidths.slice(start, Math.max(start + 1, end));
      return (
        band.reduce((sum, width) => sum + width, 0) / Math.max(1, band.length)
      );
    };
    const edgeWidth = (bandAverage(0, 0.2) + bandAverage(0.8, 1)) / 2;
    const middleWidth = bandAverage(0.38, 0.62);
    const centerBulge = middleWidth / Math.max(1, edgeWidth);
    const looksLikeWatch =
      ratio < 0.72 && centerBulge > 1.65 && shapeFill < 0.62;
    const looksLikeSlimAccessory = ratio > 1.75 && shapeFill < 0.3;
    let category = 'Tops';
    let silhouette = '베이직 탑';
    if (looksLikeWatch) {
      category = 'Accessories';
      silhouette = '미니멀 손목시계';
    } else if (looksLikeSlimAccessory) {
      category = 'Accessories';
      silhouette = '슬림 패션 액세서리';
    } else if (ratio < 0.62) {
      category = 'Bottoms';
      silhouette = '스트레이트 팬츠';
    } else if (ratio > 1.48 || (ratio > 1.32 && centerOfMassY > 0.54)) {
      category = 'Shoes';
      silhouette = '와이드 실루엣 슈즈';
    } else if (ratio > 1.14) {
      category = 'Bags';
      silhouette = '컴팩트 숄더백';
    } else if (ratio < 0.82) {
      category = 'Tops';
      silhouette = '롱 실루엣 탑';
    }
    const colorName = describeColor(red, green, blue);
    const coverage =
      foregroundPixels / Math.max(1, canvas.width * canvas.height);
    const boundaryDistance = Math.min(
      Math.abs(ratio - 0.62),
      Math.abs(ratio - 0.82),
      Math.abs(ratio - 1.18),
      Math.abs(ratio - 1.72),
    );
    const confidence = Math.round(
      Math.max(
        52,
        Math.min(88, 58 + coverage * 18 + Math.min(12, boundaryDistance * 18)),
      ),
    );
    return {
      name: `${colorName} ${silhouette}`,
      category,
      colorName,
      hex,
      ratio,
      confidence,
      shapeFill,
      centerOfMassY,
      centerBulge,
    };
  };

  const startBackgroundRemoval = async () => {
    if (!selectionBoxes.length) {
      showFeedback('먼저 사진 위에 아이템 박스를 그려 주세요.');
      return;
    }
    setModalStep('aiScan');
    aiScanTargetRef.current = 4;
    aiScanDisplayedRef.current = 0;
    setAiScanPercent(0);
    setIsAiScanning(true);
    try {
      const image = await loadImage(capturedImage);
      const results = [];
      for (let index = 0; index < selectionBoxes.length; index += 1) {
        const box = selectionBoxes[index];
        setAiScanStatus(
          `${selectionBoxes.length}개 중 ${index + 1}번째 아이템 배경 제거 중...`,
        );
        const canvas = document.createElement('canvas');
        const cropWidth = Math.max(
          1,
          Math.round(image.naturalWidth * box.width),
        );
        const cropHeight = Math.max(
          1,
          Math.round(image.naturalHeight * box.height),
        );
        const scale = Math.min(1, 1200 / Math.max(cropWidth, cropHeight));
        canvas.width = Math.max(1, Math.round(cropWidth * scale));
        canvas.height = Math.max(1, Math.round(cropHeight * scale));
        canvas
          .getContext('2d')
          .drawImage(
            image,
            Math.round(image.naturalWidth * box.x),
            Math.round(image.naturalHeight * box.y),
            cropWidth,
            cropHeight,
            0,
            0,
            canvas.width,
            canvas.height,
          );
        const crop = await canvasToBlob(canvas);
        const result = await removeBackground(crop, {
          output: { format: 'image/webp', quality: 0.86 },
          progress: (key, current, total) => {
            const resourceProgress = total
              ? Math.max(0, Math.min(1, current / total))
              : 0;
            const itemProgress = key.startsWith('compute:')
              ? 0.32 + resourceProgress * 0.63
              : 0.02 + resourceProgress * 0.28;
            const nextPercent = Math.min(
              90,
              Math.round(((index + itemProgress) / selectionBoxes.length) * 90),
            );
            aiScanTargetRef.current = Math.max(
              aiScanTargetRef.current,
              nextPercent,
            );
          },
        });
        setAiScanStatus(
          `${selectionBoxes.length}개 중 ${index + 1}번째 아이템 픽셀과 실루엣 분석 중...`,
        );
        aiScanTargetRef.current = Math.max(
          aiScanTargetRef.current,
          Math.round(((index + 0.96) / selectionBoxes.length) * 90),
        );
        const resultSrc = await blobToDataUrl(result);
        const pixelAnalysis = await analyzePixelsAndGenerateName(resultSrc);
        let analyzed = pixelAnalysis;
        try {
          setAiScanStatus(
            `${selectionBoxes.length}개 중 ${index + 1}번째 아이템을 AI로 분류 중...`,
          );
          const aiAnalysis = await classifyFashionItemWithAI(resultSrc);
          analyzed = {
            ...pixelAnalysis,
            category: aiAnalysis.category,
            name: `${pixelAnalysis.colorName} ${aiAnalysis.itemType}`,
            confidence: aiAnalysis.confidence,
            analysisMethod: 'CLIP AI',
          };
        } catch (classificationError) {
          console.warn(
            'AI classification failed; using silhouette fallback.',
            classificationError,
          );
          analyzed = { ...pixelAnalysis, analysisMethod: 'pixel fallback' };
        }
        results.push({
          id: `processed-${Date.now()}-${index}`,
          selected: true,
          name: analyzed.name,
          brand: '',
          category: analyzed.category,
          analysis: analyzed,
          src: resultSrc,
        });
        aiScanTargetRef.current = Math.min(
          90,
          Math.round(((index + 1) / selectionBoxes.length) * 90),
        );
      }
      setAiScanStatus('모든 아이템 분석을 완료했어요.');
      aiScanTargetRef.current = 100;
      await new Promise((resolve) => {
        const startedAt = Date.now();
        const waitForProgress = window.setInterval(() => {
          if (
            aiScanDisplayedRef.current >= 99.5 ||
            Date.now() - startedAt > 3200
          ) {
            window.clearInterval(waitForProgress);
            resolve();
          }
        }, 50);
      });
      aiScanDisplayedRef.current = 100;
      setAiScanPercent(100);
      await new Promise((resolve) => window.setTimeout(resolve, 250));
      setProcessedItems(results);
      setModalStep('review');
    } catch (error) {
      console.error('Background removal failed', error);
      setModalStep('boxSelect');
      showFeedback('배경 제거에 실패했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      setIsAiScanning(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const size = Math.min(video.videoWidth, video.videoHeight);
      const startX = (video.videoWidth - size) / 2;
      const startY = (video.videoHeight - size) / 2;

      canvas.width = 400;
      canvas.height = 400;

      ctx.drawImage(video, startX, startY, size, size, 0, 0, 400, 400);
      const dataUrl = canvas.toDataURL('image/png');

      stopCamera();
      openBoxSelector(dataUrl);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        openBoxSelector(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveSelectedItems = (e) => {
    e.preventDefault();
    const selected = processedItems.filter((item) => item.selected);
    if (!selected.length) {
      showFeedback('추가할 아이템을 하나 이상 선택해 주세요.');
      return;
    }
    if (selected.some((item) => !item.name.trim())) {
      showFeedback('선택한 아이템의 이름을 입력해 주세요.');
      return;
    }
    const timestamp = Date.now();
    const newItems = selected.map((item, index) => ({
      id: `custom-${timestamp}-${index}`,
      name: item.name.trim(),
      brand: item.brand.trim(),
      category: item.category,
      vibes: ['casual'],
      src: item.src,
    }));
    setItems((prev) => [...newItems, ...prev]);
    setIsModalOpen(false);
    resetModal();
    showFeedback(`${newItems.length}개 아이템을 옷장에 추가했어요.`);
  };

  const handleOpenEditModal = (item) => {
    if (isDeleteMode) {
      toggleDeleteItemSelection(item.id);
      return;
    }

    setEditingItem(item);
    setEditForm({
      name: item.name,
      brand: item.brand || '',
      category: item.category,
    });
    setDeleteConfirm(false);
    setIsEditModalOpen(true);
  };

  const handleSaveEditItem = (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      showFeedback('아이템 이름을 입력해 주세요.');
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              name: editForm.name.trim(),
              brand: editForm.brand.trim(),
              category: editForm.category,
            }
          : item,
      ),
    );
    setIsEditModalOpen(false);
    setEditingItem(null);
    showFeedback('아이템 정보를 수정했어요.');
  };

  const handleDeleteItem = () => {
    setItems((prev) => prev.filter((item) => item.id !== editingItem.id));
    if (baseItem && baseItem.id === editingItem.id) {
      setBaseItem(null);
    }
    setIsEditModalOpen(false);
    setEditingItem(null);
    showFeedback('아이템을 옷장에서 삭제했어요.');
  };

  const toggleDeleteItemSelection = (id) => {
    setSelectedDeleteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const handleBulkDelete = () => {
    if (selectedDeleteIds.length === 0) {
      showFeedback('삭제할 아이템을 선택해 주세요.');
      return;
    }

    setItems((prev) =>
      prev.filter((item) => !selectedDeleteIds.includes(item.id)),
    );
    if (baseItem && selectedDeleteIds.includes(baseItem.id)) {
      setBaseItem(null);
    }

    const count = selectedDeleteIds.length;
    setSelectedDeleteIds([]);
    setIsDeleteMode(false);
    showFeedback(`${count}개 아이템을 옷장에서 삭제했어요.`);
  };

  const resetModal = () => {
    stopCamera();
    setModalStep('selection');
    setCapturedImage(null);
    setSelectionBoxes([]);
    setActiveBox(null);
    setProcessedItems([]);
    setAiScanPercent(0);
    aiScanTargetRef.current = 0;
    aiScanDisplayedRef.current = 0;
    setAiScanStatus('');
    setNewItemInfo({ name: '', brand: '', category: 'Tops' });
    setCameraError(null);
  };

  const handleModalClose = () => {
    resetModal();
    setIsModalOpen(false);
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const changeMonth = (offset) => {
    const nextMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() + offset,
      1,
    );
    setCalendarMonth(nextMonth);
  };

  const renderCalendarDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const totalDays = getDaysInMonth(year, month);
    const startDayIndex = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < startDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 md:h-14"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const hasOutfit = !!calendarEvents[dayStr];
      const isSelected = selectedCalendarDate === dayStr;

      days.push(
        <button
          key={`day-${day}`}
          onClick={() => setSelectedCalendarDate(dayStr)}
          className={`h-10 md:h-14 rounded-xl flex flex-col items-center justify-between p-1.5 transition text-xs relative ${
            isSelected
              ? 'bg-zinc-950 text-white font-bold'
              : 'bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-100'
          }`}
        >
          <span>{day}</span>
          {hasOutfit && (
            <span
              className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-zinc-950'} mb-1`}
            ></span>
          )}
        </button>,
      );
    }

    return days;
  };

  const formatNominatimAddress = (place) => {
    const addr = place.address;
    if (!addr) return place.display_name;
    const province = cleanWord(addr.province || addr.city || '');
    const city =
      addr.city && addr.city !== province
        ? cleanWord(addr.city)
        : cleanWord(addr.county || addr.district || addr.town || '');
    const suburb = cleanWord(
      addr.suburb || addr.neighbourhood || addr.village || '',
    );
    return [province, city, suburb].filter(Boolean).join(' ');
  };

  const getDisplayedSuggestions = () => {
    const query = recommendation.location.trim();
    if (!query) {
      return [
        detectedLocation,
        '서울특별시 강남구',
        '서울특별시 마포구',
        '부산광역시 해운대구',
        '제주특별자치도 제주시',
      ];
    }

    const localFiltered = KOREAN_REGIONS.filter((region) =>
      region.toLowerCase().includes(query.toLowerCase()),
    );

    const apiFiltered = locationSuggestions.map((place) =>
      formatNominatimAddress(place),
    );
    const combined = Array.from(new Set([...localFiltered, ...apiFiltered]))
      .map((addr) => {
        return addr.split(' ').map(cleanWord).filter(Boolean).join(' ');
      })
      .filter(Boolean);

    return combined.slice(0, 6);
  };

  const loadCalendarScheduleToRecommendation = (dateStr) => {
    const day21Str = getTarget21DateString();
    if (dateStr === day21Str) {
      setRecommendation({
        date: dateStr,
        location: '서울특별시 강남구 신사동',
        situation: '민아랑 저녁 약속',
        vibe: 'romantic',
      });
      setTab('recommendation');
      showFeedback('일정을 불러왔어요.');
    } else if (calendarEvents[dateStr]) {
      const targetSchedule = calendarEvents[dateStr];
      setRecommendation({
        date: dateStr,
        location: targetSchedule.location || detectedLocation,
        situation: targetSchedule.situation || '',
        vibe: targetSchedule.vibe || 'casual',
      });
      setTab('recommendation');
      showFeedback('일정을 불러왔어요.');
    }
  };

  const selectOutfitForCalendar = (outfit) => {
    const targetDate = recommendation.date || getTomorrowDateString();

    setCalendarEvents((prev) => ({
      ...prev,
      [targetDate]: {
        id: `logged-${Date.now()}`,
        items: outfit.items,
        location: recommendation.location || detectedLocation,
        situation: recommendation.situation || '지정 안 됨',
        vibe: recommendation.vibe || 'casual',
        lowTemp: weatherData ? weatherData.lowTemp : null,
        highTemp: weatherData ? weatherData.highTemp : null,
        condition: weatherData ? weatherData.condition : null,
      },
    }));

    setSelectedOutfit(outfit.id);
    showFeedback('코디를 캘린더에 저장했어요.');
  };

  const deleteOutfitFromCalendar = (dateStr) => {
    const updated = { ...calendarEvents };
    delete updated[dateStr];
    setCalendarEvents(updated);
    showFeedback('일정이 삭제되었어요.');
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased relative pb-32">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .checkerboard-bg {
          background-image: linear-gradient(45deg, #f4f4f5 25%, transparent 25%),
                            linear-gradient(-45deg, #f4f4f5 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, #f4f4f5 75%),
                            linear-gradient(-45deg, transparent 75%, #f4f4f5 75%);
          background-size: 16px 16px;
          background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
        }
        @keyframes scan-sweep {
          0% { transform: translateY(-4px); opacity: 0.35; }
          12% { opacity: 1; }
          50% { transform: translateY(128px); opacity: 0.95; }
          62% { opacity: 1; }
          100% { transform: translateY(-4px); opacity: 0.35; }
        }
        @keyframes scan-glow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.55; }
        }
        .scan-line {
          top: 0;
          animation: scan-sweep 1.8s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .scan-overlay {
          animation: scan-glow 1.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .scan-line { animation-duration: 3.6s; }
          .scan-overlay { animation: none; opacity: 0.35; }
        }
      `}</style>

      {/* 피드백용 슬림 토스트 */}
      {feedbackMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-900/90 backdrop-blur text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xl flex items-center gap-2 transition duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-ping"></span>
          {feedbackMessage}
        </div>
      )}

      {/* 헤더 */}
      <header className="bg-white border-b border-zinc-100 py-5 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-extrabold text-xl tracking-tighter text-zinc-900">
            내일 뭐 입지
          </h1>
        </div>
      </header>

      {/* 메인 뷰포트 레이아웃 */}
      <main className="max-w-3xl mx-auto p-6 space-y-8">
        {/* TAB 1: 코디 추천 */}
        {tab === 'recommendation' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-5">
              <h2 className="font-bold text-sm tracking-tight text-zinc-900">
                코디 추천
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400">
                    날짜 선택
                  </label>
                  <input
                    type="date"
                    value={recommendation.date}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950 font-medium"
                    onChange={handleDateChange}
                  />
                </div>

                <div className="space-y-1 relative" ref={dropdownRef}>
                  <label className="text-[10px] font-bold text-zinc-400">
                    위치 설정
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder={
                        isSearchingLocation ? '위치 감지 중...' : '동네 입력'
                      }
                      value={recommendation.location}
                      className="w-full p-3 pr-10 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950 font-medium"
                      onChange={(e) => {
                        setLocationNotice('');
                        setLocationSource('manual');
                        setRecommendation({
                          ...recommendation,
                          location: e.target.value,
                        });
                        setShowLocationDropdown(true);
                      }}
                      onFocus={() => setShowLocationDropdown(true)}
                    />
                    <button
                      type="button"
                      onClick={() => fetchCurrentLocation(false)}
                      disabled={isSearchingLocation}
                      title="현재 위치 자동 핀"
                      className="absolute right-3 text-zinc-400 hover:text-zinc-900 focus:outline-none disabled:cursor-wait"
                    >
                      <svg
                        className={`w-4 h-4 ${isSearchingLocation ? 'animate-spin text-zinc-800' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  {showLocationDropdown && (
                    <div className="absolute left-0 right-0 mt-1.5 bg-white border border-zinc-200 rounded-2xl shadow-xl z-40 overflow-hidden max-h-60 flex flex-col">
                      <div className="px-3.5 py-2.5 bg-zinc-50 border-b border-zinc-100 text-[10px] font-bold text-zinc-400 flex justify-between items-center">
                        <span>
                          {recommendation.location.trim()
                            ? '동네 주소 검색결과'
                            : '인기 탐색 지역'}
                        </span>
                        {isSearchingLocation && (
                          <span className="text-[9px] text-zinc-500 animate-pulse">
                            위치 확인 중
                          </span>
                        )}
                      </div>

                      <div className="overflow-y-auto max-h-48 divide-y divide-zinc-100">
                        {getDisplayedSuggestions().map((place, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setRecommendation({
                                ...recommendation,
                                location: place,
                              });
                              setLocationSuggestions([]);
                              setShowLocationDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 text-xs hover:bg-zinc-50 text-zinc-800 flex items-center gap-2.5 transition"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-zinc-400 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                            </svg>
                            <span className="truncate">{place}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-400">
                    상세 일정
                  </label>
                  <input
                    type="text"
                    placeholder="예: 저녁 약속, 출근"
                    value={recommendation.situation}
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950 font-medium"
                    onChange={(e) =>
                      setRecommendation({
                        ...recommendation,
                        situation: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* 상황 분류 */}
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold text-zinc-400 block">
                  상황 선택
                </label>
                <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none whitespace-nowrap">
                  {VIBES.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() =>
                        setRecommendation({ ...recommendation, vibe: v.id })
                      }
                      className={`px-3.5 py-2 rounded-xl border text-[11px] font-bold transition-all shrink-0 ${
                        recommendation.vibe === v.id
                          ? 'border-zinc-950 bg-zinc-950 text-white shadow-sm'
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 필수 연계 아이템 선택 */}
              <div className="space-y-2 pt-3 border-t border-zinc-100">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-zinc-400">
                    내가 오늘 꼭 입고 싶은 옷 지정 (선택)
                  </label>
                  {baseItem && (
                    <button
                      type="button"
                      onClick={() => setBaseItem(null)}
                      className="text-[10px] text-zinc-400 hover:text-zinc-900 font-semibold underline"
                    >
                      지정 취소
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="지정할 옷 키워드 입력 (예: 데님, 슬랙스, 오타이...)"
                  value={searchKeyword}
                  className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />

                <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
                  {items
                    .filter(
                      (item) =>
                        item.name
                          .toLowerCase()
                          .includes(searchKeyword.toLowerCase()) ||
                        item.brand
                          .toLowerCase()
                          .includes(searchKeyword.toLowerCase()) ||
                        item.category
                          .toLowerCase()
                          .includes(searchKeyword.toLowerCase()),
                    )
                    .map((item) => {
                      const isSelected = baseItem && baseItem.id === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBaseItem(isSelected ? null : item)}
                          className={`flex-shrink-0 w-24 p-2.5 rounded-xl border transition-all flex flex-col items-center gap-1.5 relative ${
                            isSelected
                              ? 'border-zinc-950 bg-zinc-950 text-white shadow-lg'
                              : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400'
                          }`}
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center p-1 bg-white border border-zinc-100">
                            <SafeImage
                              src={item.src}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <p
                            className={`text-[8px] font-bold truncate w-full text-center leading-tight ${
                              isSelected ? 'text-white' : 'text-zinc-900'
                            }`}
                          >
                            {item.name}
                          </p>

                          <span
                            className={`text-[7px] px-1.5 py-0.5 rounded font-bold transition-all ${
                              isSelected
                                ? 'bg-white/20 text-white font-black'
                                : 'bg-zinc-100 text-zinc-500'
                            }`}
                          >
                            {item.category === 'Tops'
                              ? '상의'
                              : item.category === 'Bottoms'
                                ? '하의'
                                : item.category === 'Shoes'
                                  ? '신발'
                                  : item.category === 'Bags'
                                    ? '가방'
                                    : '액세서리'}
                          </span>
                        </button>
                      );
                    })}
                </div>

                {baseItem && (
                  <p className="text-[10px] text-zinc-500 font-bold">
                    📌 {baseItem.name}을 핵심으로 고정하고 코디 조합을
                    구성합니다.
                  </p>
                )}
              </div>

              <button
                onClick={generateOutfits}
                className="w-full py-3 bg-zinc-950 text-white rounded-xl text-xs font-bold hover:bg-zinc-800 transition active:scale-98"
              >
                코디 생성하기
              </button>
            </div>

            {weatherData && (
              <div className="p-4 bg-zinc-900 text-white rounded-2xl text-xs flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 animate-fadeIn">
                <span className="font-bold leading-relaxed break-keep">
                  🌤 {weatherData.location} 예보 날씨
                </span>
                <span className="leading-relaxed text-zinc-200 sm:text-right break-keep">
                  최저 {weatherData.lowTemp}°C / 최고 {weatherData.highTemp}°C · {weatherData.condition}
                </span>
              </div>
            )}

            {outfits.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {outfits.map((outfit) => (
                  <div
                    key={outfit.id}
                    className={`p-4 rounded-2xl border-2 transition duration-200 flex flex-col justify-between ${selectedOutfit === outfit.id ? 'border-zinc-950 bg-white shadow-md scale-[1.01]' : 'border-zinc-100 bg-white hover:border-zinc-300'}`}
                  >
                    <div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {outfit.items.map((it, idx) => (
                          <div
                            key={idx}
                            className="h-24 bg-zinc-50 rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center p-1"
                          >
                            <SafeImage
                              src={it.src}
                              alt={it.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => selectOutfitForCalendar(outfit)}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition ${selectedOutfit === outfit.id ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'}`}
                    >
                      {selectedOutfit === outfit.id ? '선택됨' : '선택'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: 옷장 관리 */}
        {tab === 'wardrobe' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-zinc-950">
                  내 캐비닛 목록 ({filteredItems.length}개)
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsDeleteMode(!isDeleteMode);
                      setSelectedDeleteIds([]);
                    }}
                    className={`text-[10px] px-2.5 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
                      isDeleteMode
                        ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {isDeleteMode ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      )}
                    </svg>
                    <span>{isDeleteMode ? '선택 취소' : '선택 삭제'}</span>
                  </button>

                  {!isDeleteMode && (
                    <button
                      type="button"
                      onClick={() => {
                        setModalStep('selection');
                        setIsModalOpen(true);
                      }}
                      className="bg-zinc-950 text-white hover:bg-zinc-800 text-[10px] px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 shadow-sm"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span>추가</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${category === c.id ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
                  >
                    <span>{c.label}</span>
                    <span
                      className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${category === c.id ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-500'}`}
                    >
                      {getCategoryCount(c.id)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 다중 선택 일괄 삭제 상태 패널 */}
            {isDeleteMode && (
              <div className="rounded-2xl border border-red-200 bg-red-50/70 px-5 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fadeIn">
                <div className="text-xs font-bold text-red-700">
                  <span>선택한 의상 </span>
                  <span className="font-extrabold text-base">
                    {selectedDeleteIds.length}
                  </span>
                  개
                </div>
                <div className="flex gap-2 sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedDeleteIds([])}
                    disabled={selectedDeleteIds.length === 0}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-white text-zinc-600 border border-zinc-200 rounded-xl text-[10px] font-bold hover:bg-zinc-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    전체 해제
                  </button>
                  <button
                    type="button"
                    onClick={handleBulkDelete}
                    disabled={selectedDeleteIds.length === 0}
                    className={`flex-[1.5] sm:flex-none px-5 py-2.5 rounded-xl text-[10px] font-bold transition ${
                      selectedDeleteIds.length > 0
                        ? 'bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-sm'
                        : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                    }`}
                  >
                    선택한 항목 삭제하기
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredItems.map((item) => {
                const isSelectedForDelete = selectedDeleteIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleOpenEditModal(item)}
                    className={`bg-white p-3 rounded-2xl border transition relative group cursor-pointer select-none ${
                      isDeleteMode
                        ? isSelectedForDelete
                          ? 'border-red-500 bg-red-50/20 ring-2 ring-red-500/20'
                          : 'border-zinc-200 hover:border-red-200'
                        : 'border-zinc-200 hover:shadow-md'
                    }`}
                  >
                    <div className="h-32 bg-zinc-50 rounded-lg overflow-hidden mb-2 relative flex items-center justify-center p-2">
                      <SafeImage
                        src={item.src}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />

                      {/* 편집 모드 체크박스 오버레이 */}
                      {isDeleteMode ? (
                        <div className="absolute top-2 right-2 z-10">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelectedForDelete
                                ? 'bg-red-600 border-red-600 text-white'
                                : 'bg-white border-zinc-300'
                            }`}
                          >
                            {isSelectedForDelete && (
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <span className="bg-white/90 px-3 py-1.5 rounded-xl shadow-sm text-[10px] font-bold text-zinc-800">
                            상세 보기 / 편집
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold text-xs truncate">{item.name}</h4>
                    <p className="text-[10px] text-zinc-400">
                      {item.brand || '브랜드 없음'}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: 캘린더 */}
        {tab === 'calendar' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => changeMonth(-1)}
                  className="px-3 py-1.5 hover:bg-zinc-100 rounded-lg text-xs font-semibold transition text-zinc-600"
                >
                  이전 달
                </button>
                <h3 className="font-bold text-sm tracking-tight text-zinc-900">
                  {calendarMonth.getFullYear()}년 {calendarMonth.getMonth() + 1}
                  월
                </h3>
                <button
                  onClick={() => changeMonth(1)}
                  className="px-3 py-1.5 hover:bg-zinc-100 rounded-lg text-xs font-semibold transition text-zinc-600"
                >
                  다음 달
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-zinc-400 mb-2">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
              </div>

              <div className="grid grid-cols-7 gap-1.5">
                {renderCalendarDays()}
              </div>
            </div>

            {/* 일정 상세 카드 */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-100 pb-3">
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">
                    {selectedCalendarDate}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    선택한 날짜의 상세 일정 및 매칭 코디 계획입니다.
                  </p>
                </div>
                {calendarEvents[selectedCalendarDate] && (
                  <button
                    onClick={() =>
                      deleteOutfitFromCalendar(selectedCalendarDate)
                    }
                    className="text-xs text-red-500 hover:text-red-700 font-semibold transition"
                  >
                    삭제
                  </button>
                )}
              </div>

              {calendarEvents[selectedCalendarDate] ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-zinc-50 p-4 rounded-xl text-xs">
                    <div className="md:col-span-6 space-y-1">
                      <p className="text-zinc-600 text-[11px] font-extrabold tracking-tight">
                        장소 및 일정 내용
                      </p>
                      <p className="font-bold text-zinc-950 text-xs break-all whitespace-normal leading-relaxed">
                        {calendarEvents[selectedCalendarDate].location} /{' '}
                        {calendarEvents[selectedCalendarDate].situation}
                      </p>
                    </div>
                    <div className="md:col-span-3 space-y-1">
                      <p className="text-zinc-600 text-[11px] font-extrabold tracking-tight">
                        상황 분류
                      </p>
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-zinc-900 text-white rounded text-[9px] font-bold">
                          {VIBES.find(
                            (v) =>
                              v.id ===
                              calendarEvents[selectedCalendarDate].vibe,
                          )?.label || '일상'}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3 space-y-1">
                      <p className="text-zinc-600 text-[11px] font-extrabold tracking-tight">
                        날씨
                      </p>
                      <p className="font-bold text-zinc-800 text-xs leading-relaxed">
                        {calendarEvents[selectedCalendarDate].lowTemp !==
                          null &&
                        calendarEvents[selectedCalendarDate].lowTemp !==
                          undefined
                          ? `🌤 최저 ${calendarEvents[selectedCalendarDate].lowTemp}°C / 최고 ${calendarEvents[selectedCalendarDate].highTemp}°C`
                          : '기록 없음'}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        loadCalendarScheduleToRecommendation(
                          selectedCalendarDate,
                        )
                      }
                      className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-bold hover:bg-zinc-800 transition active:scale-95 shadow-sm"
                    >
                      이 일정으로 코디 추천받기
                    </button>
                  </div>

                  {calendarEvents[selectedCalendarDate].items &&
                  calendarEvents[selectedCalendarDate].items.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {calendarEvents[selectedCalendarDate].items.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="min-w-0 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100 flex flex-col items-center"
                          >
                            <div className="h-20 w-full overflow-hidden flex items-center justify-center mb-1.5">
                              <SafeImage
                                src={item.src}
                                alt={item.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-[10px] font-bold text-zinc-800 truncate w-full text-center">
                              {item.name}
                            </p>
                            <p className="text-[9px] text-zinc-400 truncate w-full text-center">
                              {item.brand || '브랜드 없음'}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-4 bg-zinc-50/50 rounded-xl border border-dashed border-zinc-200">
                      <p className="text-[10px] text-zinc-400 font-semibold">
                        이 날짜에 정해진 의상 조합이 없습니다.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-xs text-zinc-400 font-medium">
                    등록된 코디 일정 계획이 없습니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* 하단 플로팅 글로벌 네비게이션 */}
      <div className="fixed bottom-6 left-0 right-0 z-30 px-4 md:px-0 pointer-events-none">
        <div className="max-w-md mx-auto bg-zinc-900/95 backdrop-blur-lg text-white shadow-2xl rounded-2xl p-1.5 flex items-center justify-between border border-white/10 pointer-events-auto">
          <button
            onClick={() => setTab('recommendation')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-1 ${tab === 'recommendation' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            <span>코디 추천</span>
          </button>
          <button
            onClick={() => {
              setTab('wardrobe');
              setIsDeleteMode(false);
              setSelectedDeleteIds([]);
            }}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-1 ${tab === 'wardrobe' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            <span>옷장 관리</span>
          </button>
          <button
            onClick={() => setTab('calendar')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all duration-200 flex flex-col items-center justify-center gap-1 ${tab === 'calendar' ? 'bg-white text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            <span>캘린더</span>
          </button>
        </div>
      </div>

      {/* 신규 아이템 등록 통합 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition duration-300"
          onClick={handleModalClose}
        >
          <div
            className={`bg-white w-full ${['boxSelect', 'review'].includes(modalStep) ? 'max-w-3xl' : 'max-w-md'} max-h-[92vh] overflow-y-auto rounded-3xl p-6 shadow-2xl relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-base text-zinc-900">
                {modalStep === 'selection' && '새 아이템 추가 방식'}
                {modalStep === 'upload' && '사진 파일 업로드'}
                {modalStep === 'camera' && '스마트 카메라 촬영'}
                {modalStep === 'boxSelect' && '아이템 영역 선택'}
                {modalStep === 'aiScan' && 'AI 배경 누끼 작업 중'}
                {modalStep === 'review' && '누끼 결과 확인'}
              </h2>
              <button
                onClick={handleModalClose}
                className="text-zinc-400 hover:text-zinc-900 transition p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 단계 1: 카메라 및 파일 선택 */}
            {modalStep === 'selection' && (
              <div className="space-y-3">
                <button
                  onClick={() => setModalStep('upload')}
                  className="w-full p-4 border border-zinc-200 rounded-2xl flex items-center justify-between hover:bg-zinc-50 hover:border-zinc-400 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900">
                        사진 업로드
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        기기에 저장된 사진을 추가합니다.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setModalStep('camera');
                    startCamera();
                  }}
                  className="w-full p-4 border border-zinc-200 rounded-2xl flex items-center justify-between hover:bg-zinc-50 hover:border-zinc-400 transition text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-900">
                        사진 촬영
                      </p>
                      <p className="text-[10px] text-zinc-400">
                        브라우저 기기 카메라로 즉석 촬영합니다.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* 단계 2-A: 파일 찾아보기 업로드 */}
            {modalStep === 'upload' && (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center relative hover:bg-zinc-50 transition">
                  <p className="text-xs font-medium text-zinc-600 mb-4">
                    등록할 의상 사진을 기기에서 선택하세요
                  </p>
                  <label className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-xs font-bold cursor-pointer hover:bg-zinc-800 transition">
                    파일 찾아보기
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
                <button
                  onClick={() => setModalStep('selection')}
                  className="w-full py-2.5 bg-zinc-100 text-zinc-600 rounded-xl text-xs font-medium hover:bg-zinc-200 transition"
                >
                  이전 단계로
                </button>
              </div>
            )}

            {/* 단계 2-B: 실시간 카메라 촬영 */}
            {modalStep === 'camera' && (
              <div className="space-y-4">
                <div className="relative w-full aspect-square bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center">
                  {cameraActive ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="p-6 text-center text-zinc-500">
                      {cameraError ? (
                        <p className="text-xs text-red-400">{cameraError}</p>
                      ) : (
                        <p className="text-xs">카메라를 불러오는 중입니다.</p>
                      )}
                    </div>
                  )}
                  <canvas ref={canvasRef} className="hidden" />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      stopCamera();
                      setModalStep('selection');
                    }}
                    className="flex-1 py-3 bg-zinc-100 text-zinc-600 rounded-xl text-xs font-bold hover:bg-zinc-200 transition"
                  >
                    취소
                  </button>
                  {cameraActive && (
                    <button
                      onClick={capturePhoto}
                      className="flex-[2] py-3 bg-zinc-950 text-white rounded-xl text-xs font-bold hover:bg-zinc-800 transition shadow-md"
                    >
                      촬영하기
                    </button>
                  )}
                </div>
              </div>
            )}

            {modalStep === 'boxSelect' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-zinc-800">
                      옷, 가방, 신발을 각각 드래그해 감싸 주세요.
                    </p>
                    <p className="mt-1 text-[10px] text-zinc-400">
                      빈 공간에서 드래그하면 박스가 추가됩니다. 박스는 여러 개
                      만들 수 있어요.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-bold text-zinc-600">
                    {selectionBoxes.length}개 선택
                  </span>
                </div>
                <div className="flex max-h-[52vh] w-full items-center justify-center overflow-auto rounded-2xl bg-zinc-100 p-3">
                  <div
                    ref={selectionAreaRef}
                    className="relative inline-block max-w-full overflow-hidden rounded-xl bg-zinc-950 cursor-crosshair touch-none select-none shadow-sm"
                    onPointerDown={startBox}
                    onPointerMove={moveBox}
                    onPointerUp={finishBox}
                    onPointerCancel={() => setActiveBox(null)}
                  >
                    <img
                      src={capturedImage}
                      alt="영역을 선택할 원본"
                      draggable="false"
                      className="block h-auto max-h-[48vh] w-auto max-w-full pointer-events-none"
                    />
                    {[...selectionBoxes, ...(activeBox ? [activeBox] : [])].map(
                      (box, index) => (
                        <div
                          key={box.id || 'active'}
                          className="absolute border-2 border-white bg-zinc-950/10 shadow-[0_0_0_9999px_rgba(0,0,0,0.04)] pointer-events-none"
                          style={{
                            left: `${box.x * 100}%`,
                            top: `${box.y * 100}%`,
                            width: `${box.width * 100}%`,
                            height: `${box.height * 100}%`,
                          }}
                        >
                          <span className="absolute -top-3 -left-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-zinc-950 px-1 text-[10px] font-black text-white ring-2 ring-white">
                            {index + 1}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectionBoxes((prev) => prev.slice(0, -1))
                    }
                    disabled={!selectionBoxes.length}
                    className="flex-1 py-3 bg-zinc-100 text-zinc-600 rounded-xl text-xs font-bold disabled:opacity-40"
                  >
                    마지막 박스 지우기
                  </button>
                  <button
                    type="button"
                    onClick={startBackgroundRemoval}
                    disabled={!selectionBoxes.length}
                    className="flex-[2] py-3 bg-zinc-950 text-white rounded-xl text-xs font-bold disabled:bg-zinc-300 shadow-lg"
                  >
                    누끼 따기 시작
                  </button>
                </div>
              </div>
            )}

            {/* 단계 3: 선택 영역별 실제 배경 제거 */}
            {modalStep === 'aiScan' && (
              <div className="space-y-6 py-6 text-center">
                <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center border border-zinc-200 shadow-inner">
                  {capturedImage && (
                    <img
                      src={capturedImage}
                      alt="스캔 대상"
                      className="w-full h-full object-contain p-2"
                    />
                  )}
                  <div className="scan-overlay absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-transparent" />
                  <div className="scan-line absolute left-0 right-0 z-10 h-0.5 bg-white shadow-[0_0_10px_3px_rgba(24,24,27,0.75)]">
                    <span className="absolute inset-x-0 -top-3 h-6 bg-gradient-to-b from-transparent via-zinc-900/15 to-transparent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-zinc-800">
                    {aiScanStatus}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    사진 속 옷을 정확히 감지해 고화질 투명 누끼를 따고 있습니다.
                  </p>
                </div>

                {/* 프로그레스 바 */}
                <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200/50">
                  <div
                    className="h-full rounded-full bg-zinc-950 transition-[width] duration-500 ease-out"
                    style={{ width: `${aiScanPercent}%` }}
                  />
                </div>
                <span className="text-xs font-black tabular-nums text-zinc-900">
                  {Math.round(aiScanPercent)}%
                </span>
              </div>
            )}

            {/* 단계 4: 다중 결과 리뷰 및 일괄 등록 */}
            {modalStep === 'review' && (
              <form onSubmit={saveSelectedItems} className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-zinc-800">
                      추가할 아이템을 고르고 정보를 확인해 주세요.
                    </p>
                    <p className="mt-1 text-[10px] text-zinc-400">
                      이름, 브랜드와 카테고리를 저장 전에 바로 수정할 수 있어요.
                    </p>
                  </div>
                  <span className="rounded-full bg-zinc-950 px-2.5 py-1 text-[10px] font-bold text-white">
                    {processedItems.filter((item) => item.selected).length}/
                    {processedItems.length} 선택
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {processedItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`rounded-2xl border p-3 transition ${item.selected ? 'border-zinc-400 bg-white' : 'border-zinc-100 bg-zinc-50 opacity-60'}`}
                    >
                      <div className="flex gap-3">
                        <label className="relative shrink-0 cursor-pointer">
                          <div className="checkerboard-bg flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 p-1.5">
                            <img
                              src={item.src}
                              alt={item.name}
                              className="h-full w-full object-contain drop-shadow-sm"
                            />
                          </div>
                          <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() =>
                              setProcessedItems((prev) =>
                                prev.map((entry) =>
                                  entry.id === item.id
                                    ? { ...entry, selected: !entry.selected }
                                    : entry,
                                ),
                              )
                            }
                            className="absolute left-2 top-2 h-4 w-4 accent-zinc-950"
                          />
                          <span className="absolute bottom-1.5 right-1.5 rounded bg-zinc-950 px-1.5 py-0.5 text-[8px] font-bold text-white">
                            #{index + 1}
                          </span>
                        </label>
                        <div className="min-w-0 flex-1 space-y-2">
                          <div>
                            <label className="mb-1 block text-[9px] font-bold text-zinc-400">
                              아이템 이름
                            </label>
                            <input
                              aria-label={`${index + 1}번 아이템 이름`}
                              placeholder="예: 블랙 크롭 니트"
                              value={item.name}
                              onChange={(e) =>
                                setProcessedItems((prev) =>
                                  prev.map((entry) =>
                                    entry.id === item.id
                                      ? { ...entry, name: e.target.value }
                                      : entry,
                                  ),
                                )
                              }
                              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-[11px] font-bold outline-none focus:ring-1 focus:ring-zinc-950"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-[9px] font-bold text-zinc-400">
                              브랜드 이름{' '}
                              <span className="font-medium">(선택)</span>
                            </label>
                            <input
                              aria-label={`${index + 1}번 아이템 브랜드`}
                              placeholder="예: 미레코"
                              value={item.brand}
                              onChange={(e) =>
                                setProcessedItems((prev) =>
                                  prev.map((entry) =>
                                    entry.id === item.id
                                      ? { ...entry, brand: e.target.value }
                                      : entry,
                                  ),
                                )
                              }
                              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-2 text-[11px] outline-none focus:ring-1 focus:ring-zinc-950"
                            />
                          </div>
                          <label className="-mb-1 block text-[9px] font-bold text-zinc-400">
                            카테고리
                          </label>
                          <select
                            aria-label={`${index + 1}번 아이템 카테고리`}
                            value={item.category}
                            onChange={(e) =>
                              setProcessedItems((prev) =>
                                prev.map((entry) =>
                                  entry.id === item.id
                                    ? { ...entry, category: e.target.value }
                                    : entry,
                                ),
                              )
                            }
                            className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-2 text-[10px] outline-none focus:ring-1 focus:ring-zinc-950"
                          >
                            <option value="Tops">상의</option>
                            <option value="Bottoms">하의</option>
                            <option value="Shoes">신발</option>
                            <option value="Bags">가방</option>
                            <option value="Accessories">액세서리</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 border-t border-zinc-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setModalStep('boxSelect')}
                    className="flex-1 rounded-xl bg-zinc-100 py-3 text-xs font-bold text-zinc-600"
                  >
                    박스 다시 선택
                  </button>
                  <button
                    type="submit"
                    disabled={!processedItems.some((item) => item.selected)}
                    className="flex-[2] rounded-xl bg-zinc-950 py-3 text-xs font-bold text-white shadow-lg disabled:bg-zinc-300"
                  >
                    선택한 항목 옷장에 추가
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 옷장 아이템 상세보기 및 편집 모달 */}
      {isEditModalOpen && editingItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition duration-300"
          onClick={() => setIsEditModalOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-base text-zinc-900">
                의상 정보 편집
              </h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-zinc-400 hover:text-zinc-900 transition p-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSaveEditItem} className="space-y-4">
              <div className="flex gap-4 items-center bg-zinc-50 p-3 rounded-2xl border border-zinc-100">
                <div className="w-24 h-24 bg-white rounded-xl border border-zinc-200 overflow-hidden flex items-center justify-center p-2 shrink-0">
                  <SafeImage
                    src={editingItem.src}
                    alt={editingItem.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 space-y-1 min-w-0">
                  <span className="text-[9px] bg-zinc-200 text-zinc-600 font-extrabold px-2 py-0.5 rounded-full inline-block">
                    CLOSET ITEM
                  </span>
                  <p className="text-xs font-bold text-zinc-900 truncate">
                    {editingItem.name}
                  </p>
                  <p className="text-[10px] text-zinc-400 truncate">
                    {editingItem.brand || '브랜드 없음'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">
                    아이템 이름 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 미레코 오버핏 셔츠"
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    value={editForm.name}
                    onChange={(e) =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">
                    브랜드 이름
                  </label>
                  <input
                    type="text"
                    placeholder="예: 미레코"
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    value={editForm.brand}
                    onChange={(e) =>
                      setEditForm({ ...editForm, brand: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold text-zinc-400 block mb-1">
                    카테고리 *
                  </label>
                  <select
                    className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({ ...editForm, category: e.target.value })
                    }
                  >
                    <option value="Tops">상의 (Tops)</option>
                    <option value="Bottoms">하의 (Bottoms)</option>
                    <option value="Shoes">신발 (Shoes)</option>
                    <option value="Bags">가방 (Bags)</option>
                    <option value="Accessories">액세서리 (Accessories)</option>
                  </select>
                </div>
              </div>

              {/* 하단 제어부 */}
              <div className="pt-4 border-t border-zinc-100 space-y-2">
                {!deleteConfirm ? (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setDeleteConfirm(true)}
                      className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition"
                    >
                      삭제하기
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] py-3 bg-zinc-950 text-white rounded-xl text-xs font-bold hover:bg-zinc-800 transition shadow-lg active:scale-98"
                    >
                      저장하기
                    </button>
                  </div>
                ) : (
                  <div className="bg-red-50 p-3.5 rounded-2xl border border-red-200 text-center space-y-3 animate-fadeIn">
                    <p className="text-[11px] font-semibold text-red-800">
                      이 아이템을 옷장에서 완전히 삭제할까요?
                    </p>
                    <div className="flex gap-2 justify-center">
                      <button
                        type="button"
                        onClick={() => setDeleteConfirm(false)}
                        className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-xl text-[10px] font-bold hover:bg-zinc-100 transition"
                      >
                        취소
                      </button>
                      <button
                        type="button"
                        onClick={handleDeleteItem}
                        className="px-4 py-2 bg-red-600 text-white rounded-xl text-[10px] font-bold hover:bg-red-700 transition"
                      >
                        네, 삭제합니다
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
