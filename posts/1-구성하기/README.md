# Lerna로 Mono Repo (Typescript & Jest) 환경 구성하기 

```bash
lerna init -i 
```

**root/lerna.json**

```json
{
  "packages": [
    "packages/*"
  ],
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true
}
```

우리는 version 정책을 독립 모드로 가져가기 때문에 version: "independent"로 지정한 것이고,
yarn을 사용할 것이기 때문에 npmClient: "yarn" 그리고 yarn workspace 사용을 위해 useWorkspaces: true로 지정하였다.

* `lerna.json`
    * lerna 설정
* 최상위 package.json
    * `devDependencies` 중 공통 모듈
    * 프로젝트 전체를 대상으로 하는 `script`
* `packages`
    * 수동 / `lerna create 패키지명` 으로 자동생성 모두 가능

**root/package.json**

```json
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^4.0.0"
  }
}
```    

```bash
lerna create blog-log
lerna create blog-base
```

## Yarn workspaces

![workspaces](./images/workspaces.png)

(https://classic.yarnpkg.com/)

배포와 버전관리는 러나 
* yarn workspaces도 일부 command를 제공하긴 하지만, 여러 개의 패키지를 용이하게 관리 할 수 있는 CLI 명령어는 Lerna에서 많이 제공 되고 있습니다(publish, version 등). 
* 위에서 설명한 commands 말고도 패키지들을 효율적으로 관리하고 배포 할 수 있는 상당히 많은 명령어를 제공하고 있는데(링크) 자동화를 위한 CI설정에서 마주칠 수 있는 다양한 상황에 대응 할 수 있는 많은 옵션들이 많아서 좋았고 관련한 이슈와 수정사항이 지속해서 개발되고 있다는 점도 Lerna를 매력적인 모노레포 매니저로 만드는 중요한 요소인 것 같습니다.

패키지 관리는 Yarn으로 
* yarn 은 npm과 함께 개발자에게 많이 사용되는 패키지 매니저 
* npm이 모노레포를 지원하지 않는 반면에 yarn은 yarn workspaces 를 추가적인 라이브러리 설치 없이 쉬운 방법으로 제공하고 있고 속도와 안정성을 위주로 계속 개발 할것을 암시하며 개발자들의 만족감을 올려주고 있습니다. 
  Yarn workspaces가 불필요하게 lerna bootstrap 등의 명령을 실행하지 않으면서 더 안전하고(버그없이) 깔끔하게 패키지를 관리해주므로 Lerna + yarn workspaces의 조합이 많은 개발자들에게 선택을 받는 것 같습니다.

## 의존성 설치

### 공통 의존성 설치

공통으로 사용될 모듈로 eslint를 설치해보자

```bash
yarn add eslint --dev --ignore-workspace-root-check
```

```bash
yarn add @types/jest jest @types/jest typescript --dev --ignore-workspace-root-check
```

### 개별 의존성 설치

```bash
lerna add express --scope=blog-api
```

혹은 직접 모듈로 가서 설치

```bash
cd blog-entity
lerna add express --scope=blog-api
```
