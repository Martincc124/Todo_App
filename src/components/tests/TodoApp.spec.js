import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoApp from '../TodoApp.vue'


describe("Productlist component unit test: ", ()=>{
    test("Renders the list", () => {
        const wrapper = mount(TodoApp);
        expect(wrapper.findAll('.todo-item')).toHaveLength(3);
      });
      test("creates a todo item", async () => {
        const wrapper = mount(TodoApp);
        const newName = "PHP";
        await wrapper.get('input').setValue(newName);
        await wrapper.get('.add-btn').trigger("click");
        expect(wrapper.findAll('.todo-item')).toHaveLength(4);
      });
      test("test method", () => {
        const wrapper = mount(TodoApp);
        expect(wrapper.vm.test(2)).toBe(4);
      });
      test("deletes a todo item", () => {
        const wrapper = mount(TodoApp);
        wrapper.vm.deleteTask(1);
        expect(wrapper.vm.tasks.length).toBe(2)
      });
      test("updates a todo item", async () => {
        const wrapper = mount(TodoApp);
        const newName = "React best framework";
        await wrapper.get('.edit-btn').trigger("click")
        await wrapper.get('input').setValue(newName);
        await wrapper.get('.add-btn').trigger("click");
        expect(wrapper.get('.todo-name').text()).toMatch(newName)
      });
})