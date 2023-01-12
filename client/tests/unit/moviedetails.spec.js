import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import MovieDetails from '../../src/components/MovieDetails.vue'

describe('MovieDetails.vue', () => {
    describe('when loaded', () => {
        it('has the required elements', () => {
            const wrapper = shallowMount(MovieDetails);

            expect(wrapper.find('#title').exists()).to.be.equal(true);
            expect(wrapper.find('#description').exists()).to.be.equal(true);
            expect(wrapper.find('#year').exists()).to.be.equal(true);
            expect(wrapper.find('#country').exists()).to.be.equal(true);
            expect(wrapper.find('#duration').exists()).to.be.equal(true);
            expect(wrapper.find('#btn-cesta').exists()).to.be.equal(true);
            expect((wrapper.find('#btn-cesta')).text()).to.equal('Añadir a la cesta');


          })
    })
  
})
