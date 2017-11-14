import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Actions from './Actions.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      someAction: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })  
  })

  it('dispatches an action when a watched value changes', () => {
    const wrapper = shallow(Actions, {
      store,
      localVue
    })

    wrapper.find('button').trigger('click')

    expect(actions.someAction.mock.calls).toHaveLength(1)
    expect(actions.someAction.mock.calls[0][1]).toEqual({ val: 1 })
  })

  it('dispatches an action when a watched value changes', async () => {
    const wrapper = shallow(Actions, {
      store,
      localVue
    })

    await wrapper.setData({ val: 2 })

    expect(actions.someAction.mock.calls).toHaveLength(1)
    expect(actions.someAction.mock.calls[0][1]).toEqual({ val: 2 })
  })
})
