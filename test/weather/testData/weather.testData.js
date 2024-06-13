const testWeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1718290800,
      main: {
        temp: 289.52,
        feels_like: 288.86,
        temp_min: 289.17,
        temp_max: 289.52,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1006,
        humidity: 63,
        temp_kf: 0.35,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 6.43,
        deg: 187,
        gust: 10.29,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-13 15:00:00",
    },
    {
      dt: 1718301600,
      main: {
        temp: 288.52,
        feels_like: 287.89,
        temp_min: 286.53,
        temp_max: 288.52,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1004,
        humidity: 68,
        temp_kf: 1.99,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 60,
      },
      wind: {
        speed: 5.04,
        deg: 194,
        gust: 11.86,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-13 18:00:00",
    },
    {
      dt: 1718312400,
      main: {
        temp: 286.8,
        feels_like: 286.18,
        temp_min: 285.44,
        temp_max: 286.8,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1002,
        humidity: 75,
        temp_kf: 1.36,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 6.07,
        deg: 191,
        gust: 11.85,
      },
      visibility: 10000,
      pop: 0.64,
      rain: {
        "3h": 0.29,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-13 21:00:00",
    },
    {
      dt: 1718323200,
      main: {
        temp: 284.4,
        feels_like: 284.09,
        temp_min: 284.4,
        temp_max: 284.4,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.03,
        deg: 185,
        gust: 13.07,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.05,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-14 00:00:00",
    },
    {
      dt: 1718334000,
      main: {
        temp: 285.94,
        feels_like: 285.76,
        temp_min: 285.94,
        temp_max: 285.94,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.86,
        deg: 219,
        gust: 9.63,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-14 03:00:00",
    },
    {
      dt: 1718344800,
      main: {
        temp: 286.39,
        feels_like: 285.86,
        temp_min: 286.39,
        temp_max: 286.39,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.5,
        deg: 218,
        gust: 9.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 06:00:00",
    },
    {
      dt: 1718355600,
      main: {
        temp: 287.3,
        feels_like: 286.81,
        temp_min: 287.3,
        temp_max: 287.3,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.02,
        deg: 209,
        gust: 8.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 09:00:00",
    },
    {
      dt: 1718366400,
      main: {
        temp: 286.21,
        feels_like: 285.87,
        temp_min: 286.21,
        temp_max: 286.21,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.98,
        deg: 199,
        gust: 9.24,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.41,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 12:00:00",
    },
    {
      dt: 1718377200,
      main: {
        temp: 290.22,
        feels_like: 289.63,
        temp_min: 290.22,
        temp_max: 290.22,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 996,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 5.96,
        deg: 218,
        gust: 9.77,
      },
      visibility: 10000,
      pop: 0.97,
      rain: {
        "3h": 0.7,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 15:00:00",
    },
    {
      dt: 1718388000,
      main: {
        temp: 288.52,
        feels_like: 287.89,
        temp_min: 288.52,
        temp_max: 288.52,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 995,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 69,
      },
      wind: {
        speed: 4.75,
        deg: 218,
        gust: 8.55,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.78,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-14 18:00:00",
    },
    {
      dt: 1718398800,
      main: {
        temp: 285.64,
        feels_like: 285.03,
        temp_min: 285.64,
        temp_max: 285.64,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 995,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.89,
        deg: 207,
        gust: 9.06,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-14 21:00:00",
    },
    {
      dt: 1718409600,
      main: {
        temp: 284.32,
        feels_like: 283.82,
        temp_min: 284.32,
        temp_max: 284.32,
        pressure: 999,
        sea_level: 999,
        grnd_level: 994,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.96,
        deg: 214,
        gust: 9.45,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        "3h": 0.43,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 00:00:00",
    },
    {
      dt: 1718420400,
      main: {
        temp: 282.64,
        feels_like: 280.48,
        temp_min: 282.64,
        temp_max: 282.64,
        pressure: 998,
        sea_level: 998,
        grnd_level: 994,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 4.09,
        deg: 229,
        gust: 10.97,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 03:00:00",
    },
    {
      dt: 1718431200,
      main: {
        temp: 284.36,
        feels_like: 283.57,
        temp_min: 284.36,
        temp_max: 284.36,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 4.77,
        deg: 218,
        gust: 11.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 06:00:00",
    },
    {
      dt: 1718442000,
      main: {
        temp: 287.62,
        feels_like: 287.11,
        temp_min: 287.62,
        temp_max: 287.62,
        pressure: 999,
        sea_level: 999,
        grnd_level: 995,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 6.32,
        deg: 232,
        gust: 11.13,
      },
      visibility: 7182,
      pop: 1,
      rain: {
        "3h": 0.69,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 09:00:00",
    },
    {
      dt: 1718452800,
      main: {
        temp: 288.64,
        feels_like: 288.18,
        temp_min: 288.64,
        temp_max: 288.64,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 996,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 6.52,
        deg: 234,
        gust: 12.44,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.86,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 12:00:00",
    },
    {
      dt: 1718463600,
      main: {
        temp: 289.13,
        feels_like: 288.43,
        temp_min: 289.13,
        temp_max: 289.13,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 996,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 6.52,
        deg: 240,
        gust: 11.79,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.42,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 15:00:00",
    },
    {
      dt: 1718474400,
      main: {
        temp: 287.35,
        feels_like: 286.76,
        temp_min: 287.35,
        temp_max: 287.35,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 996,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 5.19,
        deg: 242,
        gust: 11.52,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.05,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-15 18:00:00",
    },
    {
      dt: 1718485200,
      main: {
        temp: 285.3,
        feels_like: 284.61,
        temp_min: 285.3,
        temp_max: 285.3,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 998,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 5.07,
        deg: 232,
        gust: 11.24,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-15 21:00:00",
    },
    {
      dt: 1718496000,
      main: {
        temp: 284.09,
        feels_like: 283.41,
        temp_min: 284.09,
        temp_max: 284.09,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 999,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 4.74,
        deg: 232,
        gust: 11.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 00:00:00",
    },
    {
      dt: 1718506800,
      main: {
        temp: 283.12,
        feels_like: 281.15,
        temp_min: 283.12,
        temp_max: 283.12,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 999,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 3.93,
        deg: 220,
        gust: 10.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 03:00:00",
    },
    {
      dt: 1718517600,
      main: {
        temp: 285.35,
        feels_like: 284.66,
        temp_min: 285.35,
        temp_max: 285.35,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 4.19,
        deg: 217,
        gust: 10.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 06:00:00",
    },
    {
      dt: 1718528400,
      main: {
        temp: 289.51,
        feels_like: 288.64,
        temp_min: 289.51,
        temp_max: 289.51,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 5.55,
        deg: 228,
        gust: 8.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 09:00:00",
    },
    {
      dt: 1718539200,
      main: {
        temp: 291.57,
        feels_like: 290.67,
        temp_min: 291.57,
        temp_max: 291.57,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 6.03,
        deg: 222,
        gust: 9.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 12:00:00",
    },
    {
      dt: 1718550000,
      main: {
        temp: 293.06,
        feels_like: 292.39,
        temp_min: 293.06,
        temp_max: 293.06,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 6.39,
        deg: 219,
        gust: 9.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 15:00:00",
    },
    {
      dt: 1718560800,
      main: {
        temp: 291.37,
        feels_like: 290.81,
        temp_min: 291.37,
        temp_max: 291.37,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1000,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 5.21,
        deg: 214,
        gust: 8.02,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.17,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-16 18:00:00",
    },
    {
      dt: 1718571600,
      main: {
        temp: 287.29,
        feels_like: 286.93,
        temp_min: 287.29,
        temp_max: 287.29,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1002,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 3.49,
        deg: 217,
        gust: 8.36,
      },
      visibility: 10000,
      pop: 0.43,
      rain: {
        "3h": 0.2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-16 21:00:00",
    },
    {
      dt: 1718582400,
      main: {
        temp: 285.84,
        feels_like: 285.46,
        temp_min: 285.84,
        temp_max: 285.84,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1003,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 2.73,
        deg: 216,
        gust: 7.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 00:00:00",
    },
    {
      dt: 1718593200,
      main: {
        temp: 284.75,
        feels_like: 284.37,
        temp_min: 284.75,
        temp_max: 284.75,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1003,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 2.15,
        deg: 212,
        gust: 6.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 03:00:00",
    },
    {
      dt: 1718604000,
      main: {
        temp: 286.59,
        feels_like: 286.08,
        temp_min: 286.59,
        temp_max: 286.59,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 3.19,
        deg: 221,
        gust: 8.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 06:00:00",
    },
    {
      dt: 1718614800,
      main: {
        temp: 289.68,
        feels_like: 289.14,
        temp_min: 289.68,
        temp_max: 289.68,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1005,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 3.77,
        deg: 239,
        gust: 6.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 09:00:00",
    },
    {
      dt: 1718625600,
      main: {
        temp: 292.21,
        feels_like: 291.74,
        temp_min: 292.21,
        temp_max: 292.21,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 4.53,
        deg: 235,
        gust: 6.76,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.36,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 12:00:00",
    },
    {
      dt: 1718636400,
      main: {
        temp: 293.31,
        feels_like: 292.92,
        temp_min: 293.31,
        temp_max: 293.31,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 5.01,
        deg: 235,
        gust: 6.84,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.96,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 15:00:00",
    },
    {
      dt: 1718647200,
      main: {
        temp: 291.2,
        feels_like: 291.15,
        temp_min: 291.2,
        temp_max: 291.2,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1007,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 3.1,
        deg: 231,
        gust: 5.6,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.62,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-17 18:00:00",
    },
    {
      dt: 1718658000,
      main: {
        temp: 287.98,
        feels_like: 287.97,
        temp_min: 287.98,
        temp_max: 287.98,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1008,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 86,
      },
      wind: {
        speed: 2.07,
        deg: 217,
        gust: 6.39,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.33,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-17 21:00:00",
    },
    {
      dt: 1718668800,
      main: {
        temp: 286.5,
        feels_like: 286.42,
        temp_min: 286.5,
        temp_max: 286.5,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 1.71,
        deg: 224,
        gust: 3.51,
      },
      visibility: 10000,
      pop: 0.8,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-18 00:00:00",
    },
    {
      dt: 1718679600,
      main: {
        temp: 285.82,
        feels_like: 285.68,
        temp_min: 285.82,
        temp_max: 285.82,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1009,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 76,
      },
      wind: {
        speed: 1.15,
        deg: 249,
        gust: 1.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-06-18 03:00:00",
    },
    {
      dt: 1718690400,
      main: {
        temp: 286.84,
        feels_like: 286.56,
        temp_min: 286.84,
        temp_max: 286.84,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 0.8,
        deg: 305,
        gust: 1.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 06:00:00",
    },
    {
      dt: 1718701200,
      main: {
        temp: 290.3,
        feels_like: 289.85,
        temp_min: 290.3,
        temp_max: 290.3,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 23,
        gust: 2.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 09:00:00",
    },
    {
      dt: 1718712000,
      main: {
        temp: 295.05,
        feels_like: 294.58,
        temp_min: 295.05,
        temp_max: 295.05,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1010,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.58,
        deg: 50,
        gust: 1.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-06-18 12:00:00",
    },
  ],
  city: {
    id: 2643743,
    name: "London",
    coord: {
      lat: 51.5085,
      lon: -0.1257,
    },
    country: "GB",
    population: 1000000,
    timezone: 3600,
    sunrise: 1718250182,
    sunset: 1718309903,
  },
};

export default testWeatherData;
