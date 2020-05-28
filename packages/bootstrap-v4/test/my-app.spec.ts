import { expect } from 'chai';
import { TestContext, TestConfiguration } from '@aurelia/testing';
import Aurelia, { CustomElement } from 'aurelia';
import { MyApp } from '../src/my-app';

describe('my-app', () => {
  it('should render message', async () => {
    const ctx = TestContext.createHTMLTestContext();
    const { container } = ctx;
    const node = ctx.createElement('my-app');

    const au = new Aurelia(container)
      .register(TestConfiguration)
      .app({ host: node, component: MyApp });

    // const component = au.root.controller.bindingContext;
    await au.start().wait();

    // In Shadow DOM open mode, shadowRoot is also accessible through DOM API
    //   node.shadowRoot
    // But only Aurelia API can access shadowRoot in both open and closed mode.
    const shadowRoot = CustomElement.for(node).projector.provideEncapsulationSource();
    const text = (shadowRoot as Node).textContent;
    expect(text.trim()).to.equal('Hello World!');
    await au.stop().wait();
  });
});
