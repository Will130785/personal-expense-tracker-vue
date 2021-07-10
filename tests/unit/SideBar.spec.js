import SideBar from '../../src/components/navigation/SideBar'
import { mount } from '@vue/test-utils'

describe('SideBar', () => {
  test('If user is not logged in, do not show the side bar', () => {
    const wrapper = mount(SideBar)
    expect(wrapper.find('.sidebar').isVisible()).toBe(false)
    // expect(true).toBe(true)
  })

  test('If user is logged in, sidebar should be displayed', async () => {
    const wrapper = mount(SideBar)
    wrapper.setData({ isLoggedIn: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.sidebar').isVisible()).toBe(true)
  })
})
