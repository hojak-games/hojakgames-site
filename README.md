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
| `og-image.png` | | 카톡, 슬랙 등에 링크를 붙일 때 뜨는 미리보기 이미지 (1200×630) |
| `CNAME` | | GitHub Pages용 도메인 설정. 지우지 마세요 |
| `_config.yml` | | `README.md`, `CLAUDE.md`가 사이트 페이지로 공개되지 않게 막습니다 |

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

## 배포 (처음 한 번)

### 1. GitHub에 올리기

1. GitHub에서 **Public** 저장소를 새로 만듭니다(예: `hojakgames-site`). 무료 계정은 공개 저장소에서만 Pages를 쓸 수 있습니다.
2. 이 폴더에서 다음을 실행합니다. 첫 커밋은 이미 되어 있습니다.

   ```powershell
   git remote add origin https://github.com/hojak-games/hojakgames-site.git
   git push -u origin main
   ```

3. 저장소의 **Settings → Pages**에서
   - Source: **Deploy from a branch**, Branch: **main**, 폴더: **/ (root)** → Save
   - Custom domain: `hojakgames.com` → Save

### 2. Porkbun DNS 연결

Porkbun → Domain Management → hojakgames.com → **DNS**에서 작업합니다.

1. 처음부터 들어 있는 Porkbun 주차 페이지용 레코드(`pixie.porkbun.com`, `uixie.porkbun.com`을 가리키는 ALIAS/CNAME)를 지웁니다.
2. 아래 레코드를 추가합니다. Host 칸이 비어 있으면 루트 도메인(`hojakgames.com`)을 뜻합니다.

   | Type | Host | Answer |
   |---|---|---|
   | A | (비움) | `185.199.108.153` |
   | A | (비움) | `185.199.109.153` |
   | A | (비움) | `185.199.110.153` |
   | A | (비움) | `185.199.111.153` |
   | CNAME | `www` | `hojak-games.github.io` |

   IPv6도 받으려면 AAAA 레코드 네 개를 더 추가합니다: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`

3. 반영되기까지 몇 분에서 몇 시간 걸립니다. GitHub Pages 설정 화면에서 DNS 확인이 끝나면 **Enforce HTTPS**를 켭니다.

참고: [Porkbun – GitHub Pages 연결](https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages), [GitHub – 커스텀 도메인 관리](https://docs.github.com/ko/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

### 3. contact@hojakgames.com 메일 (Zoho Mail)

메일은 Zoho Mail로 받고 보냅니다. Porkbun DNS에 Zoho가 안내한 MX 3개, SPF TXT, 인증 TXT가 들어 있습니다.
`contact@`는 Zoho에서 계정이나 별칭(alias)으로 만들어 두어야 받을 수 있습니다.

- Porkbun의 Email Forwarding은 켜지 마세요. MX 레코드가 Zoho와 충돌합니다.
- 테스트는 Zoho 계정이 아닌 다른 메일 주소에서 보내 봅니다.
- 보내는 메일이 스팸함에 덜 가도록, Zoho 관리 콘솔의 안내대로 DKIM TXT 레코드와 DMARC TXT 레코드(`_dmarc`)도 추가하는 걸 권장합니다.

### (권장) 도메인 소유 확인

저장소가 organization에 있으므로 **organization의 Settings → Pages → Add a domain**에서 `hojakgames.com`을 확인해 두면, 다른 사람이 이 도메인을 자기 Pages에 연결하지 못합니다. 안내에 나오는 TXT 레코드를 Porkbun DNS에 추가하면 됩니다.

## 이후 수정

파일을 고치고 `git commit` → `git push` 하면 1~2분 안에 사이트에 반영됩니다.
