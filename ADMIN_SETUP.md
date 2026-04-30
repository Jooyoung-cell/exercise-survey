# 관리자 보호 설정

이 프로젝트는 설문 화면은 공개하고, 관리자 응답 조회는 Vercel API + Supabase DB + 관리자 비밀번호로 보호합니다.

## 1. Supabase 테이블 만들기

Supabase 프로젝트를 만든 뒤 SQL Editor에서 `supabase-schema.sql` 내용을 실행하세요.

## 2. Vercel 환경변수 추가

Vercel 프로젝트의 Settings > Environment Variables에 아래 값을 추가하세요.

```text
SUPABASE_URL=Supabase Project URL
SUPABASE_SERVICE_ROLE_KEY=Supabase service_role key
ADMIN_PASSWORD=관리자 로그인 비밀번호
ADMIN_SESSION_SECRET=아무도 모르는 긴 랜덤 문자열
```

주의: `SUPABASE_SERVICE_ROLE_KEY`는 절대 GitHub 파일에 넣지 말고 Vercel 환경변수에만 넣어야 합니다.

## 3. GitHub에 업로드할 파일

기존 파일:

```text
index.html
styles.css
app.js
```

추가 파일/폴더:

```text
api/
supabase-schema.sql
ADMIN_SETUP.md
```

업로드 후 Vercel이 다시 배포되면 설문 응답은 Supabase에 저장되고, 관리자 화면은 비밀번호 로그인 후에만 열립니다.
