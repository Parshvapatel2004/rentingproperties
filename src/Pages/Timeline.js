import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

const Timeline = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <TimelineMain/>
      <Footer/>
    </div>
  )
}

function TimelineMain(){
    return (
      <>
        <section class="timeline-1 py-5">
          <div class="container py-md-3">
            <ul class="timeline">
              <li>
                <div class="timeline-badge">
                  <span class="fa fa-check"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Building Surviying</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge warning">
                  <span class="fa fa-credit-card"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Total Investment</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                    <p>
                      Suco de cevadiss, é um leite divinis, qui tem lupuliz,
                      matis, aguis e fermentis. Interagi no mé, cursus quis,
                      vehicula ac nisi. Aenean vel dui dui. Nullam leo erat,
                      aliquet quis tempus a, posuere ut mi. Ut scelerisque neque
                      et turpis posuere pulvinar pellentesque nibh ullamcorper.
                      Pharetra in mattis molestie, volutpat elementum justo.
                      Aenean ut ante turpis. Pellentesque laoreet mé vel lectus
                      scelerisque interdum cursus velit auctor. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Etiam ac
                      mauris lectus, non scelerisque augue. Aenean justo massa.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-badge danger">
                  <span class="fa fa-home"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Property & Asset</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-badge warning">
                  <span class="fa fa-credit-card"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Property & Asset</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Suco de cevadiss, é um leite divinis, qui tem lupuliz,
                      matis, aguis e fermentis. Interagi no mé, cursus quis,
                      vehicula ac nisi. Aenean vel dui dui. Nullam leo erat,
                      aliquet quis tempus a, posuere ut mi. Ut scelerisque neque
                      et turpis posuere pulvinar pellentesque nibh ullamcorper.
                      Pharetra in mattis molestie, volutpat elementum justo.
                      Aenean ut ante turpis. Pellentesque laoreet mé vel lectus
                      scelerisque interdum cursus velit auctor. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Etiam ac
                      mauris lectus, non scelerisque augue. Aenean justo massa.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div class="timeline-badge info">
                  <span class="fa fa-cog"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Industrial Agency</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>

              <li class="timeline-inverted">
                <div class="timeline-badge success">
                  <span class="fa fa-thumbs-up"></span>
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4 class="timeline-title">Office Agency</h4>
                    <p>
                      <small class="text-3">
                        <span class="fa fa-clock-o"></span> 11 hours ago via
                        Twitter
                      </small>
                    </p>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Mussum ipsum cacilds, vidis litro abertis. Consetis
                      adipiscings elitis. Pra lá , depois divoltis porris,
                      paradis. Paisis, filhis, espiritis santis. Mé faiz
                      elementum girarzis, nisi eros vermeio, in elementis mé pra
                      quem é amistosis quis leo. Manduma pindureta quium dia
                      nois paga. Sapien in monti palavris qui num significa
                      nadis i pareci latim. Interessantiss quisso pudia ce
                      receita de bolis, mais bolis eu num gostis.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
}

export default Timeline
