# hojakgames.com

호작게임즈(Hojak Games) 홈페이지입니다. 빌드 없는 정적 사이트(HTML/CSS/JS)이고, 파일 구성과 배포 방법은 README.md에 있습니다.

## 결정된 것

- **호스팅:** GitHub Pages를 쓰고, DNS는 Porkbun에 그대로 둡니다. Cloudflare Pages는 루트 도메인을 연결하려면 네임서버를 옮겨야 해서 쓰지 않습니다.
- **메일:** Zoho Mail을 씁니다(사용자가 2026-11-17에 설정, 처음 계획한 Porkbun 포워딩 대신). Porkbun DNS에 Zoho MX 3개(`mx`/`mx2`/`mx3.zoho.com`), SPF(`include:zohomail.com`), Zoho 인증 TXT, DKIM(selector `zoho`), DMARC(`p=none`, 집계 보고서는 `contact@`로)가 있습니다. Porkbun 이메일 포워딩은 MX가 충돌하므로 켜지 않습니다.
- **언어:** 한국어가 `/`, 영어가 `/en/`입니다. 브라우저 언어에 따른 자동 이동은 넣지 않고, hreflang과 전환 링크만 둡니다.
- **범위:** 담백한 단일 소개 페이지입니다. 로고, 이름, 소개 한 줄, 연락처만 둡니다(사용자 요청). 장난스러운 인터랙션이나 애니메이션은 넣지 않습니다. 처음에 만든 "글자를 누르면 튀어 오르고 색이 바뀌는 워드마크"는 사용자가 2026-11-17에 뺐습니다.
- **이름 표기:** 한국어 페이지는 "호작게임즈"(붙여 씀), 영어 페이지는 "Hojak Games"입니다. 한국어 `description`/`og:description`은 "호작게임즈(Hojak Games)는…"으로 두 표기를 같이 씁니다. 404 페이지는 한/영 겸용이라 "Hojak Games"입니다.
- **소개 문구:** 사용자가 2026-11-17에 정했습니다. 두 줄이고, 줄바꿈 위치를 지켜야 합니다(`<br>`).
  - 한국어: "호작게임즈는 인디게임 스튜디오입니다." / "문의는 아래 메일로 부탁드립니다."
  - 영어: "Hojak Games is an indie game studio." / "Get in touch at the address below."
  - 영어 줄은 320px 폰에서 한 줄에 들어가는 길이로 골랐습니다. 첫 줄은 283px로, 쓸 수 있는 폭 288px에 거의 꽉 찹니다. 문구를 늘리면 폰에서 줄이 하나 더 생길 수 있습니다.
- **로고:** `logo_main.svg`(사용자 제공, 호랑이와 까치)입니다. 페이지 맨 위와 브라우저 탭 아이콘에 씁니다. `logo_main.png`는 사용자가 같이 준 원본이고 페이지에서는 쓰지 않습니다.
  - `apple-touch-icon.png`(180×180)와 `og-image.png`(1200×630)는 이 로고로 헤드리스 Edge에서 그렸습니다. 로고가 바뀌면 다시 만들어야 합니다.
  - 로고 SVG는 흰 테두리 위에 같은 모양의 청록 테두리가 겹쳐 있습니다. 그래서 청록 배경 위에서는 바깥 윤곽을 따라 아주 얇은 밝은 선이 비칩니다. 원본 파일이라 고치지 않았습니다.
- **디자인:**
  - 색은 로고에서 가져왔습니다. 배경은 테마색 `#08404A`(로고 바탕 청록과 같음), 글자는 흰색입니다. 보조 글자색 `--muted`는 `#b4d3d6`입니다(배경 대비 7.2). 다크 모드에서도 배경색을 바꾸지 않습니다.
  - 글꼴은 한글과 영어 모두 Pretendard(jsDelivr의 dynamic subset, v1.3.9)입니다. Pretendard의 영문은 Inter 기반이라 영문 글꼴을 따로 두지 않습니다. 처음 쓰던 Bagel Fat One과 Gowun Dodum은 사용자가 마음에 들어 하지 않아 뺐습니다.
  - 가운데 정렬 한 단입니다.
  - 한국어 본문에는 `word-break: keep-all`을 적용했습니다.
  - hover 스타일은 `@media (hover: hover)` 안에만 둡니다. 터치 기기에서는 탭한 뒤 hover 상태가 남기 때문입니다.
  - JS는 메일 주소 복사 버튼 하나뿐입니다(main.js). 클립보드 API가 없으면 버튼을 숨깁니다.

## Git 규칙

- 커밋 메시지와 코드 주석(HTML, CSS, JS, YAML)은 영어로만 씁니다. 화면 문구와 README, CLAUDE.md는 한국어 그대로입니다.
- 커밋 작성자는 사용자 본인만입니다. Claude 공동 작성자 트레일러나 "Generated with Claude Code" 문구를 넣지 않습니다.
- 이 저장소의 커밋 메일은 GitHub noreply 주소이고, 저장소 로컬 git 설정에 들어 있습니다. 전역 git 설정에는 개인 메일이 있으니 저장소를 새로 만들거나 `git init`을 다시 하면 로컬 설정부터 다시 넣어야 합니다.

## 남은 일 (2026-11-17 기준)

- [x] 소개 문구, 한글 표기 확정
- [x] 로고, 테마색, 글꼴 반영. 글자 놀이 제거
- [x] 로컬 히스토리를 영어 커밋 하나로 새로 시작
- [x] GitHub 저장소 `hojak-games/hojakgames-site`(organization, public) 생성과 첫 push(2026-11-17). 이후 push는 로그인 창이 뜰 수 있어 사용자가 직접 합니다(gh CLI 없음).
- [x] Pages 켜기, Porkbun DNS 연결(A 4개, `www` CNAME → `hojak-games.github.io`)
- [x] 배포 확인(2026-11-17, http 기준): `/`, `/en/`, 이미지 200, `www` → 루트 301, 없는 주소 404 페이지, `/README.html`·`/CLAUDE.html`·`/README.md` 404(`_config.yml` exclude 동작)
- [x] HTTPS 인증서 발급(Let's Encrypt, `hojakgames.com`과 `www` 포함). 사용자가 Enforce HTTPS를 켰습니다(2026-11-17).
- [x] `http://` → `https://` 301 리디렉션 확인
- [ ] (권장) organization Settings → Pages에서 도메인 소유 확인. `_github-pages-challenge-hojak-games` TXT가 아직 없습니다.
- [x] 메일 DNS: Zoho MX, SPF, DKIM, DMARC 모두 DNS에 올라간 것을 확인(2026-11-17)
- [ ] 메일 실제 테스트: 다른 주소에서 `contact@`로 보내 받히는지, `contact@`에서 Gmail로 보낸 뒤 원본 보기에서 SPF/DKIM/DMARC가 모두 PASS인지
- [ ] DMARC는 몇 주 지켜보고 문제가 없으면 `p=quarantine`으로 올리는 걸 고려합니다.
- [ ] 카톡 등에서 링크 미리보기 이미지가 뜨는지 확인

## 작업 메모

- 미리 보기: 이 폴더에서 `python -m http.server 8000`을 실행합니다. `file://`로 열면 `en/` 링크와 404 페이지(절대 경로 사용)가 제대로 동작하지 않습니다.
  - 폰에서 LAN IP(http)로 열면 클립보드 API가 없어서 복사 버튼이 숨겨집니다. 정상입니다.
- 스크린샷과 클릭 테스트: `--remote-debugging-port`로 띄운 헤드리스 Edge를 CDP로 조작합니다(`--user-data-dir=<임시폴더>` 필요).
  - `Input.dispatchMouseEvent`/`dispatchTouchEvent`는 실제 입력처럼 동작합니다.
  - 모바일 크기는 `Emulation.setDeviceMetricsOverride`로 찍습니다. 창 크기로는 최소 너비가 약 500px이라 안 됩니다.
  - python에 websocket 라이브러리가 없어서 표준 라이브러리 socket으로 websocket을 직접 구현해 썼습니다.
- node와 gh CLI는 설치되어 있지 않습니다. python은 있습니다.
