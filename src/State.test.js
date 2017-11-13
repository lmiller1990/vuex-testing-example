import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import State from './State.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('State', () => {
  it('renders a value from $store.state', () => {
    const wrapper = shallow(State, {
      mocks: {
        $store: {
          state: {
            value_1: 'value_1'
          }
        }
      },
      localVue
    })

    expect(wrapper.find('.state-1').text().trim()).toEqual('value_1')
  })

  it('renders a $store.state value return from computed', () => {
    const wrapper = shallow(State, {
      computed: {
        value_2: () => 'value_2'
      },
      localVue
    })

    expect(wrapper.find('.state-2').text().trim()).toEqual('value_2')
  })

  it('renders a $store.state value return from mapState', () => {
    const wrapper = shallow(State, {
      computed: {
        value_3: () => 'value_3'
    },
      localVue
    })

    expect(wrapper.find('.state-3').text().trim()).toEqual('value_3')
  })
})
