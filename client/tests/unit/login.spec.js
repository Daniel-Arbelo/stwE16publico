import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(Login);

            expect(wrapper.find('#title').exists()).toBe(true);
            expect(wrapper.find('#title').text()).toBe('Login');
            expect(wrapper.find('#usuario').exists()).toBe(true);
            expect(wrapper.find('#contraseña').exists()).toBe(true);
            expect(wrapper.find('#btn-login').exists()).toBe(true);
            expect(wrapper.find('#btn-login').text()).toBe('Login');


          })
    })
  
})
