# 리액트 네이티브 프로젝트 시작

## 개발환경 세팅

## 1. JDK 설치

- [JDK 17버전 설치](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)
- 환경변수 세팅
  - 내 PC > 우클릭 속성 > 고급 시스템 > 환경변수 선택
  - 사용자 변수 새로 생성
    - 변수 이름 : JAVA_HOME
    - 변수 값 : JAVA 설치 경로(C:\Program Files\Java\jdk-17)
  - 시스템 변수 Path 수정
    - Path 편집 > 새로 만들기 > %JAVA_HOME%\bin 입력
- JAVA -version 확인

```bash
java -version
```

## 2. 안드로이드 스튜디오 설치

- [안드로이드 스튜디오 설치](https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio?hl=ko#0)
- 환경변수 세팅
  - 내 PC > 우클릭 속성 > 고급 시스템 > 환경변수 선택
  - 사용자 변수 새로 생성
    - 변수 이름 : `ANDROID_HOME`
    - 변수 값 : JDK 경로(C:\Users\User\AppData\Local\Android\Sdk)
  - 시스템 변수 Path 수정
    - Path 편집 > 새로 만들기 > `%ANDROID_HOME%\platform-tools` 입력
    - `%ANDROID_HOME%\emulator` 입력
- 버전 확인

```bash
adb version
```

## 3. 프로젝트 생성

```bash
npx react-native init "프로젝트이름"
```

# 1단계: Metro 서버 시작하기

- 먼저, React Native와 함께 제공되는 **Metro**라는 JavaScript 번들러를 시작해야 합니다.

- 프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 Metro를 시작합니다:

```bash
# npm 사용 시
npm start

# 또는 Yarn 사용 시
yarn start
```

# 2단계: 애플리케이션 실행하기

- Metro 번들러는 별도의 터미널에서 실행한 채로 두세요. 새 터미널을 열고, 프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 Android 또는 iOS 앱을 시작합니다:

## Android에서 실행

```bash
# npm 사용 시
npm run android

# 또는 Yarn 사용 시
yarn android
```

## iOS에서 실행

```bash
# npm 사용 시
npm run ios

# 또는 Yarn 사용 시
yarn ios
```

- 에뮬레이터/시뮬레이터 설정이 제대로 되어 있다면, 곧 새 앱이 실행되는 것을 확인할 수 있습니다. 또한, Android Studio 또는 Xcode에서 직접 앱을 실행할 수도 있습니다.

# 3단계: 앱 수정하기

- 앱을 성공적으로 실행한 후, 다음 단계를 따라 앱을 수정할 수 있습니다.

1. 사용 중인 텍스트 편집기에서 App.tsx 파일을 열어 코드를 수정하세요.
2. Android에서 수정한 내용을 반영하려면:

- <kbd>R</kbd> 키를 두 번 누르거나, 개발자 메뉴에서 **"Reload"**를 선택하세요 (<kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) 또는 <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS)).
- iOS에서 수정한 내용을 반영하려면:
  iOS 시뮬레이터에서 <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> 키를 눌러 앱을 리로드하세요.

# React Native에서 JSX 문법을 사용하기 위한 준비

1. node_modules 제거
2. package-lock.json 제거
3. App.test.tsx, App.txt 파일 .jsx 확장자로 변경

- App.test.jsx, App.jsx, index.jsx 확인

4. metro.config.js 에 아래 코드 추가

```js
const config = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

5. android 폴더 접속해서 gradlew clean 명령어 입력

```bash
cd android
gradlew clean
```

6. node 패키지 재설치

```bash
npm install
npx react-native start --reset-cache
```

# 에러 해결

## 1. 특정 포트 점유로 인한 에러

```bash
# 현재 실행되는 프로세스 및 PID를 확인합니다
$ netstat -ano

# 특정 포트(e.g. 8080)만 확인하고 싶은 경우 find 명령어를 함께 사용한다
$ netstat -ano | find "8080"

# 해당 프로세스의 아이디(PID)를 이용하여 프로세스를 종료합니다
$ taskkill /f /pid 22644
```

# 더 알아보기

- React Native에 대해 더 알고 싶다면, 아래 자료를 참고하세요:

- [React Native 웹사이트](https://reactnative.dev/)
- [환경 설정](https://reactnative.dev/docs/environment-setup)
- [React Native 기본 개념](https://reactnative.dev/docs/getting-started)
