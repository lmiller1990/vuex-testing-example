import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Getters from './Getters.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Getters', () => {
  describe('with a store', () => {
    let store
    let getters

    beforeEach(() => {
      getters = {
        getter_1: () => 'value_1',
        getter_2: () => (arg) => arg
      }
      store = new Vuex.Store({ getters })
    })

    it('renders a values from getters', () => {
      const wrapper = shallow(Getters, {
        store,
        localVue
      })

      expect(wrapper.find('.map-getters').text().trim()).toEqual('value_1')
      expect(wrapper.find('.computed-getters').text().trim()).toEqual('value_2')
    })

    it('shows how to use store.hotUpdate', () => {
      store.hotUpdate({
        getters: {
          ...getters,
          getter_1: () => 'wrong_value'
        }
      })

      const wrapper = shallow(Getters, {
        store,
        localVue
      })

      expect(wrapper.find('.map-getters').text().trim()).not.toEqual('value_1')
      expect(wrapper.find('.computed-getters').text().trim()).toEqual('value_2')
    })
  })

  describe('without a store', () => {
    it('renders a value from getters', () => {
      const wrapper = shallow(Getters, {
        localVue,
        computed: {
          getter_1: () => 'value_1',
          getter_2: () => 'value_2'
        }
      })

      expect(wrapper.find('.map-getters').text().trim()).toEqual('value_1')
      expect(wrapper.find('.computed-getters').text().trim()).toEqual('value_2')
    })
  })
})

