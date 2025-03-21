# AI Class

Next.js 14 기반의 AI 클래스 프로젝트입니다.
(주)나눔비타민 사내 AI 활용 서비스 개발 세션 진행하며 생성된 프로젝트입니다.

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
src/
  ├── app/              # App Router 구조
  │   ├── layout.tsx    # 루트 레이아웃
  │   └── page.tsx      # 메인 페이지
  ├── components/       # 재사용 가능한 컴포넌트
  ├── lib/             # 유틸리티 함수
  └── types/           # TypeScript 타입 정의
```

## 환경 변수

프로젝트 루트에 `.env` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
