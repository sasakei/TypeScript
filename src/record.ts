export {};

type Prefectures = 'Tokyo' | 'Kyoto' | 'Osaka';

type Covid19Info = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19Info> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 2000 },
  Kyoto: { kanji_name: '京都', confirmed_cases: 300 },
  Osaka: { kanji_name: '大阪', confirmed_cases: 700 },
};

// ⬆︎2つの型を引数にとり、それぞれをオブジェクトのキーとバリューに割り当てている
