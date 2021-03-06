# Detector App with React Native

## 프로젝트 설치

```sh
yarn

# developing android
open -a /Applications/Android\ Studio.app path/to/firecop-app/android

# developing ios
npx pod-install
```

## 실행

```sh
# running react-native pacakager before executing android/ios
yarn start

# running android
yarn android

# running ios
yarn ios
```

## 모듈 임포트 방법

상대주소를 사용하지 않기 위해서 `src`를 루트로 설정했기때문에 아래 예시의 **after** 부분처럼 절대경로로 모듈을 임포트할 수 있습니다.

```js
// before
import client from './src/services'

// after
import client from 'src/services'
```

## Linting (ESLint/Prettier)

커밋을 치기 전 시점인 pre-commit 시점에 `yarn lint`를 실행해 포맷/린트 검사를 합니다. 코드를 고치려면 한 번에 고치려면 아래와 같은 스크립트를 사용합니다.

```sh
yarn lint:fix
```

## Navigator (@react-navigation)

#### @react-navigation과 react-native-navigation의 차이점??

- @react-navigation
  - 자바스크립트 기반
  - 30만건 다운로드
  - v4 이전 프로젝트에서 사용한 적 있음 (현재 v5)
- react-native-navigation
  - 네이티브 기반 (Object-C/Swift, Java/Kotlin)
  - 3만건 다운로드

## Styling (SCSS)

## State Manager for local data (Recoil)

- 유저 로그인 세션 관리

## Graphql client for remote data (Apollo)

- 외부에 요청하는 데이터 처리
- apollo 클라이언트에 들어가는 graphql 서버는 prisma cloud에서 제공하는 [데모서버](https://us1.prisma.sh/yangwook-jeong-1f91f5/demo/dev)를 사용 중

## Component

- hooks, states, handlers를 region으로 묶어 나눔
- 주석처리 된 region에 커서를 올리고 `cmd + alt + [`로 접었다가 `cmd + alt + ]`로 펼칠 수 있어 가독성을 올리는데 도움이 됨

## Debugging

- 시뮬레이터(`cmd + d`)나 에뮬레이터(`cmd + m`)에서 debugger console을 켜서 `f12`로 크롬 dev tools를 열면 깔끔한 로그를 확인할 수 있다.

## Tip

optional chaining이 eslint에서 동작하지 않아서 아래와 같은 에러가 발생하니, 예전에 사용하던 방식인 `foo && foo.map()`같은 코드로 작성할 것

> Parsing error: Unexpected token .