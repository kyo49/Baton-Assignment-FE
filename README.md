### 🧩 기술 스택

```bash
    "react": "^18.2.0",
    "typescript": "^4.9.5",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
```

### 📁 파일 구조
```bash
.
└─ src
   ├─ App.tsx
   ├─ index.tsx
   ├─ react-app-env.d.ts
   ├─ assets               	이미지 관리 (png, index)
   |  └─ ...
   ├─ hooks         	
   │  	  ├─ useRandom    
   │      └─ useRandomColor     
   ├─ components        
   │      ├─ Background   뒷배경
   │  	  ├─ Balloons     풍선
   │      └─ Content      콘텐츠   
   └─ styles           		
      └─ globalStyles.ts  전역 스타일
```

### ✍ 커밋 컨벤션

> 예시 : [FEAT] Adding main components

| 제목     | 내용                                                         |
| -------- | ------------------------------------------------------------ |
| SETTING  | 작업 세팅 커밋 (패키지 설치, 파일 추가 등)                   |
| FEAT     | 기능 추가 및 변경 (화면 영향 o)                              |
| STYLE    | 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우) |
| FIX      | 버그 수정, 맞지 않는 값 수정                                 |
| REFACTOR | 더 좋은 코드 개선 (화면 영향 x)                              |
| ETC      | 문서 작성 or 그 외 커밋(주석, 개행 등)                       |


### 👩‍💻 개발 일지 노션
https://peach-pewter-2d6.notion.site/f2788cf98be84fba8e336236b872080c?p=d9e0f67c986d41278939b1f7353cc514&pm=c
