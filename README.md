# TON Contest

# Start

1. Enter `yarn` or `npm install` in your console
2. Enter `yarn start` or `npm run start` in your console for start project

# Build

1. Enter `yarn` or `npm install` in your console
2. Enter `yarn build` or `npm run build` in your console for start project

# Other Dependencies

| Dependencies  | Description                                           |
|---------------|-------------------------------------------------------|
| react-scripts | scrips for build project, present in create-react-app |
| redux-saga    | manager for requests in redux                         |
| recharts      | library for charts                                    |

# Features

## Adaptive

|                                                                     Dekstop                                                                     |              Mobile               |
|:-----------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------:|
|  <img width="1904" alt="Screenshot 2022-01-31 at 15 45 42" src="https://user-images.githubusercontent.com/45998835/151796058-f0d87e6d-3193-489d-ac35-e956bb5c8c59.png"> | ![iBmOP3kT9LA](https://user-images.githubusercontent.com/45998835/151795985-dcff3364-0e00-4329-abd9-b10f92c14d0a.jpg) |
|  <img width="1904" alt="Screenshot 2022-01-31 at 15 46 54" src="https://user-images.githubusercontent.com/45998835/151796235-caf86a2d-c64c-4886-9cda-36ae5540a946.png"> | ![1mWTgmUuZZo](https://user-images.githubusercontent.com/45998835/151796163-cb0a7788-c483-4df3-bd9b-c4f97ddfe01a.jpg) |

## Skeletons

|             Example 1             |             Example 2             |
|:---------------------------------:|:---------------------------------:|
| ![yUWdRdiPMfo](https://user-images.githubusercontent.com/45998835/151796291-3af5b88f-66f5-4623-a64b-ab1f7e87181c.jpg) | ![UvenF15VB_Q](https://user-images.githubusercontent.com/45998835/151796332-02a4ff7e-cdf4-497e-9f12-6a3f98539524.jpg) |

## Dark and light scheme

|                                                                      Dark                                                                       |                                                                      Light                                                                      |
|:-----------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------:|
| <img width="1904" alt="Screenshot 2022-01-31 at 15 48 32" src="https://user-images.githubusercontent.com/45998835/151796389-0552d253-f93a-4ea0-b10b-1dbfafa8ec93.png"> | <img width="1904" alt="Screenshot 2022-01-31 at 15 48 58" src="https://user-images.githubusercontent.com/45998835/151796453-dc3d2ce7-7e0f-4fcc-b728-de78437329b9.png"> |

# Code

## Directories

| Directory     | Description                                                                                                                 |
|---------------|-----------------------------------------------------------------------------------------------------------------------------|
| components    | very common components                                                                                                      |
| enums         | common enums                                                                                                                |
| icons         | all icons in project                                                                                                        |
| modals        | all modals in project here                                                                                                  |
| notifications | pages notifications                                                                                                         |
| pages         | all pages in project here, like pool, swap, add liquidity                                                                   |
| store         | directory with reducers, every directory has actions, selectors and sets, sets for dispatch, actions for actions in reducer |
| styles        | very common styles, only palette with css tokens                                                                            |
| types         | common types, witch uses in components types                                                                                |
| utils         | common helpers                                                                                                              |


## Component struct

Every component has files TComponent.ts, Component.tsx and Component.css, by the files name you can understand what is in them

## Code style

I didn't add stylelint or prettier in project to avoid unnecessary dependencies

## Import agreements

Absolute imports dominate relative imports. Other imports go in sequence: 

react <br>
react-* libraries <br>
Component types <br>
Component styles <br>
... <br>
icons <br>
absolute components <br>
relative components <br>
