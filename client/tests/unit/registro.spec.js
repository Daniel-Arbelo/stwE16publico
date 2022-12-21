import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Registro from '@/components/Registro.vue'

describe('Registro.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(Registro);

            expect(wrapper.find('#title').exists()).toBe(true);
            expect(wrapper.find('#title').text()).toBe('Registro');
            expect(wrapper.find('#usuario').exists()).toBe(true);
            expect(wrapper.find('#contraseña').exists()).toBe(true);
            expect(wrapper.find('#email').exists()).toBe(true);
            expect(wrapper.find('#btn-registro').exists()).toBe(true);
            expect(wrapper.find('#btn-registro').text()).toBe('Register');
          })
    })
})