'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-health-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' :
                                            'id="xs-controllers-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' :
                                        'id="xs-injectables-links-module-AppModule-5b700cf5932aba6736da1bf43c5ac111f79ad8ebba3ae62bd1c74ceb32bfced78fa3f0c7b1e81d815298e1f956f046fce581d21795ffd5b03d7347cb2a561bcb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' : 'data-bs-target="#xs-controllers-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' :
                                            'id="xs-controllers-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' }>
                                            <li class="link">
                                                <a href="controllers/HomeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' : 'data-bs-target="#xs-injectables-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' :
                                        'id="xs-injectables-links-module-HomeModule-08cdfb540c2bf5510702385d73bff68ff5409cf801ac104501af3d4beb07104edb5c991f56ce127d5216b34a645eab9e36d25fd7da148d18d6e9e5cd8e58ceda"' }>
                                        <li class="link">
                                            <a href="injectables/HomeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateHomeDto.html" data-type="entity-link" >CreateHomeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Home.html" data-type="entity-link" >Home</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateHomeDto.html" data-type="entity-link" >UpdateHomeDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});