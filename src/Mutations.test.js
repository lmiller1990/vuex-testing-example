import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Mutations from './Mutations.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Mutations', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      MUTATION: jest.fn()
    }

    store = new Vuex.Store({
      mutations
    })  
  })

  it('commits a MUTATION type mutation when a button is clicked', () => {
    const wrapper = shallow(Mutations, {
      store,
      localVue
    })

    wrapper.find('button').trigger('click')

    expect(mutations.MUTATION.mock.calls).toHaveLength(1)
    expect(mutations.MUTATION.mock.calls[0][1]).toEqual({ val: 'val' })
  })
})
