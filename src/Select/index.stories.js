import React from 'react'

import { storiesOf } from '@storybook/react'

import Select from '../Select'

const items = [
  'Wandering Thunder',
  'Black Wildflower',
  'Ancient Paper',
]

storiesOf('Form/Select', module)
  .add('default', () => (
    <Select items={items} />
  ))
