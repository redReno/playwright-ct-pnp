import { test, expect } from '@playwright/experimental-ct-react';
import { Info } from './Info';

test.use({ viewport: { width: 500, height: 500 } });

test('verify tooltip works', async ({ mount }) => {
  const component = await mount(<Info title="Example Title" tooltip="Example Tooltip" />)
  const tooltip = component.getByTestId('infoTooltip')

  await expect(tooltip).toBeVisible()
  await tooltip.hover()
  await expect(component.getByRole('tooltip')).toBeVisible()
});
