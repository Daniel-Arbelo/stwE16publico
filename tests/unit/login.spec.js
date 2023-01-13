import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '../../src/components/LoginUser.vue'

describe('Login.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(Login);

            expect(wrapper.find('#title').exists()).to.be.equal(true);
            expect(wrapper.text()).to.include('Login')
            expect(wrapper.find('#gmail').exists()).to.be.equal(true);
            expect(wrapper.find('#contraseña').exists()).to.be.equal(true);
            expect(wrapper.find('#btn-login').exists()).to.be.equal(true);
            expect((wrapper.find('#btn-login')).text()).to.equal('Login');


          })
    })
  
})
