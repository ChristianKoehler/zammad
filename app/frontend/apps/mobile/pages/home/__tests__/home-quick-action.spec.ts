// Copyright (C) 2012-2023 Zammad Foundation, https://zammad-foundation.org/

import { visitView } from '@tests/support/components/visitView'
import { mockPermissions } from '@tests/support/mock-permissions'

describe('testing home section menu', () => {
  it('home icon is highlighted on home page', async () => {
    mockPermissions(['ticket.agent'])

    const view = await visitView('/')

    expect(view.getByIconName('mobile-add')).toBeInTheDocument()

    // TODO: Check on ticket create form, when route exists
    // await view.events.click(quickAction)

    // await waitFor(() => {
    //   expect(view.getByText('TODO')).toBeInTheDocument()
    // })
  })
})
