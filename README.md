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
| ![](../../../var/folders/gh/cb6fh6yd213gkrghmw55h8f40000gn/T/TemporaryItems/NSIRD_screencaptureui_Hq5Xqd/Screenshot 2022-01-31 at 15.15.24.png) | ![](../Downloads/iBmOP3kT9LA.jpg) |
|                                              ![](../Desktop/Screenshot 2022-01-31 at 15.17.22.png)                                              | ![](../Downloads/1mWTgmUuZZo.jpg) |

## Skeletons

|             Example 1             |             Example 2             |
|:---------------------------------:|:---------------------------------:|
| ![](../Downloads/UvenF15VB_Q.jpg) | ![](../Downloads/yUWdRdiPMfo.jpg) |

## Dark and light scheme

|                                                                      Dark                                                                       |                                                                      Light                                                                      |
|:-----------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------:|
| ![](../../../var/folders/gh/cb6fh6yd213gkrghmw55h8f40000gn/T/TemporaryItems/NSIRD_screencaptureui_03hRLe/Screenshot 2022-01-31 at 15.22.14.png) | ![](../../../var/folders/gh/cb6fh6yd213gkrghmw55h8f40000gn/T/TemporaryItems/NSIRD_screencaptureui_dLtBmq/Screenshot 2022-01-31 at 15.22.36.png) |

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

react
react-* libraries
Component types
Component styles
...
icons
absolute components
relative components