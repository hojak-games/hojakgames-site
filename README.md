# hojakgames.com

호작게임즈(Hojak Games) 홈페이지입니다. 빌드 과정이 없는 정적 사이트이고, GitHub Pages로 배포합니다.

## 파일

| 파일 | 주소 | 내용 |
|---|---|---|
| `index.html` | `/` | 한국어 페이지 |
| `en/index.html` | `/en/` | 영어 페이지 |
| `404.html` | 없는 주소 | 없는 페이지 안내 (한/영) |
| `style.css` | | 공통 스타일. 색은 맨 위 `:root`에 있습니다 |
| `main.js` | | 메일 주소 복사 버튼 |
| `logo_main.svg` | | 로고. 페이지와 브라우저 탭 아이콘에 씁니다 |
| `logo_main.png` | | 로고 PNG 원본. 페이지에서는 쓰지 않습니다 |
| `apple-touch-icon.png` | | 폰 홈 화면에 추가할 때 쓰는 아이콘 (180×180) |
| `og-image.png` | | 링크를 공유할 때 뜨는 미리보기 이미지 (1200×630) |
| `CNAME` | | GitHub Pages용 도메인 설정. 지우지 마세요 |
| `_config.yml` | | `README.md`가 사이트 페이지로 공개되지 않게 막습니다 |

**문구를 고치려면:** `index.html`과 `en/index.html`의 `<p class="intro">`를 고칩니다.
`<meta name="description">`와 `og:description`도 같이 바꾸면 검색 결과와 링크 미리보기에 반영됩니다.

**메일 주소를 바꾸려면:** 두 페이지의 `mailto:`, 링크 텍스트, `data-email` 세 곳을 바꿉니다.

**로고를 바꾸려면:** `logo_main.svg`를 같은 이름으로 덮어씁니다. 가로세로 비율이 달라지면 두 페이지와 `404.html`의 `<img class="logo">`에 있는 `width`, `height`도 맞춰 주세요. `apple-touch-icon.png`와 `og-image.png`는 로고를 그려 넣은 이미지라 따로 다시 만들어야 합니다.

**글꼴:** 한글과 영어 모두 [Pretendard](https://github.com/orioncactus/pretendard)를 jsDelivr에서 불러옵니다.

## 로컬에서 미리 보기

```powershell
python -m http.server 8000
```

그다음 브라우저에서 http://localhost:8000 을 엽니다.
`index.html`을 더블클릭해도 보이지만, 그렇게 열면 언어 전환 링크와 404 페이지가 제대로 동작하지 않습니다.

## 배포

`main` 브랜치에 push하면 1~2분 안에 사이트에 반영됩니다.
