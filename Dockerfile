# 1. Node.js 이미지 기반으로 설정
FROM node:18

# 2. 작업 디렉토리 설정
WORKDIR /usr/src/app

# 3. 패키지 설치
COPY package*.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. 환경 변수 설정
# 런타임에 DATABASE_URL을 주입할 수 있도록 설정
ENV DATABASE_URL="postgresql://shy1234:soon7832!@pg-2vnmvd.vpc-cdb-kr.ntruss.com:5432/test"

# 6. Prisma Client 생성 및 마이그레이션
# Prisma Client를 생성하고 데이터베이스 마이그레이션을 수행
RUN npx prisma generate
RUN npx prisma migrate deploy

# 7. NestJS 앱 빌드
RUN npm run build

# 8. 애플리케이션 시작 명령
CMD ["npm", "run", "start:prod"]