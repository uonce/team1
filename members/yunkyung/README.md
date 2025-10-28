# 자기소개 웹사이트 (Bootstrap 5 버전)

## 📋 프로젝트 요구사항

✅ HTML 문서 4개
- index.html (메인 홈페이지)
- about.html (상세 소개)
- portfolio.html (포트폴리오)
- contact.html (고양이 소개)

✅ HTML 문서끼리 hyperlink로 이동 가능
- 상단 네비게이션 바로 모든 페이지 연결
- Bootstrap 5 navbar 컴포넌트 사용

✅ 이미지 사용
- profile.png (프로필 사진)
- bus.png (버스 프로젝트)
- garden.png (가드닝 프로젝트)
- kia.jpg (야구 취미)
- over.png (게임 취미)
- hodu.png (고양이)

✅ Bootstrap 5 적용
- Bootstrap 5.3.0 CDN 사용
- Bootstrap 컴포넌트 활용 (navbar, cards, buttons, badges 등)
- Bootstrap 유틸리티 클래스 활용
- 반응형 그리드 시스템 적용
- 커스텀 CSS로 추가 스타일링

## 📁 파일 구조

```
portfolio/
├── index.html          # 메인 홈페이지
├── about.html          # 상세 소개
├── portfolio.html      # 포트폴리오
├── contact.html        # 고양이 소개
├── css/
│   └── style.css       # 커스텀 CSS
├── images/             # 이미지 폴더
│   ├── profile.png
│   ├── bus.png
│   ├── garden.png
│   ├── kia.jpg
│   ├── over.png
│   └── hodu.png
└── README.md
```

## 🎨 Bootstrap 5 주요 활용 요소

### 컴포넌트
- **Navbar**: 반응형 네비게이션 바
- **Cards**: 프로젝트 및 취미 카드
- **Buttons**: 네비게이션 버튼
- **Badges**: 기술 스택 표시

### 유틸리티 클래스
- **Spacing**: `m-*`, `p-*`, `mb-*`, `mt-*` 등
- **Colors**: `text-success`, `bg-success`, `text-secondary` 등
- **Display**: `d-flex`, `justify-content-*`, `align-items-*`
- **Typography**: `fs-*`, `fw-*`, `text-center`
- **Borders**: `border-*`, `rounded-*`
- **Shadows**: `shadow`, `shadow-sm`

### 레이아웃
- **Container**: 반응형 컨테이너
- **Grid System**: `row`, `col-*` 클래스
- **Flexbox**: `d-flex`, `gap-*` 활용

## 🚀 실행 방법

1. **파일 구조 준비**
   - 모든 HTML 파일을 루트 디렉토리에 배치
   - `css/` 폴더에 `style.css` 배치
   - `images/` 폴더에 이미지 파일들 배치

2. **브라우저에서 실행**
   - `index.html` 파일을 브라우저로 열기
   - 또는 Live Server 사용 (VSCode 확장)

3. **Bootstrap 5 CDN**
   - 인터넷 연결 필요 (CDN 사용)
   - 오프라인 사용 시 Bootstrap 파일 다운로드 필요

## 💡 커스터마이징

### 색상 변경
- `style.css`에서 `#4CAF50` (녹색) 변경
- Bootstrap의 `$theme-colors` 커스터마이징 가능

### 내용 수정
- 각 HTML 파일에서 텍스트 수정
- `이윤경`을 본인 이름으로 변경

### 이미지 교체
- `images/` 폴더의 이미지 파일 교체
- HTML에서 이미지 경로 확인

## 🎯 주요 기능

### 반응형 디자인
- 모바일, 태블릿, 데스크톱 모두 지원
- Bootstrap의 브레이크포인트 활용

### 네비게이션
- 모든 페이지 간 쉬운 이동
- 현재 페이지 표시 (active 클래스)
- 모바일에서 햄버거 메뉴로 전환

### 인터랙티브 요소
- 카드 호버 효과
- 버튼 호버 애니메이션
- 부드러운 전환 효과

## 🛠️ 사용 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 스타일링
- **Bootstrap 5.3.0**: UI 프레임워크
- **Responsive Design**: 모바일 우선 디자인

## 📝 Bootstrap 5 vs 기존 버전 변경사항

### 주요 변경점
1. **CSS 프레임워크**: 커스텀 CSS → Bootstrap 5 + 커스텀 CSS
2. **네비게이션**: 수동 구현 → Bootstrap navbar 컴포넌트
3. **카드 레이아웃**: 커스텀 grid → Bootstrap cards + grid
4. **버튼 스타일**: 커스텀 → Bootstrap button 클래스
5. **반응형**: 미디어쿼리 → Bootstrap 유틸리티 클래스

### 장점
- ✅ 빠른 개발 속도
- ✅ 일관된 디자인
- ✅ 검증된 반응형 레이아웃
- ✅ 접근성 개선
- ✅ 유지보수 용이

## 📚 참고 자료

- [Bootstrap 5 공식 문서](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Bootstrap 5 Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## 👤 제작자

**이윤경**
- 유레카 3기 백엔드 개발자
- 2025년 졸업 예정
