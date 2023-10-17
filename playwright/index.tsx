// Import styles, initialize component theme here.
// import '../src/common.css';
import React from "react";
import { beforeMount } from "@playwright/experimental-ct-react/hooks";
import styled from 'styled-components'
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import { initializeIcons } from '@fluentui/react'


initializeIcons('./fonts/fabric-font/', { disableWarnings: true })


const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  width: 100vw;
`

const Content = styled.main`
  margin: 45px 55px 45px 55px;
`
const AppStyle = createGlobalStyle`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }
`

beforeMount(async ({ App }) => {
  return (
    <div>
      <AppStyle />
        <Main>
          <Content>
            <App />
          </Content>
        </Main>
    </div>
  );
});