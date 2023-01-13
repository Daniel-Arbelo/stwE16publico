import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Registro from '../../src/components/RegistroUser.vue'

describe('Registro.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(Registro);

            expect(wrapper.find('#title').exists()).to.be.equal(true);
            expect(wrapper.find('#title').text()).to.include('Registro');
            expect(wrapper.find('#usuario').exists()).to.be.equal(true);
            expect(wrapper.find('#contraseña').exists()).to.be.equal(true);
            expect(wrapper.find('#email').exists()).to.be.equal(true);
            expect(wrapper.find('#btn-registro').exists()).to.be.equal(true);
            expect(wrapper.find('#btn-registro').text()).to.equal('Register');
          })
    })
})