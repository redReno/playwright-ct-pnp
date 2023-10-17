import { FC } from 'react'
import styled from 'styled-components'
import { Button, Label, Tooltip } from '@fluentui/react-components'
import { InfoRegular } from '@fluentui/react-icons'

interface InfoProps {
  readonly title: string
  readonly tooltip: string
}

const Content = styled.span`
  align-items: center;
  display: flex;
`

export const Info: FC<InfoProps> = ({ title, tooltip }) => {
  return (
    <Content>
      <Label data-testid="infoTitle" required weight="semibold">
        {title}
      </Label>
      <Tooltip
        relationship="description"
        withArrow
        content={{
          style: { maxWidth: undefined },
          children: tooltip,
        }}
      >
        <Button
          appearance="transparent"
          data-testid="infoTooltip"
          icon={<InfoRegular />}
        />
      </Tooltip>
    </Content>
  )
}
