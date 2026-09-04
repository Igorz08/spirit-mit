import "./Servicos.css";
import Feedback from "../../Components/Feedback";

export default function Servicos() {

    return (

        <>
        <main className="servicos">

            <section className="listaServicos">

                <div className="tituloLista">

                    <h2>LISTA DE SERVIÇOS</h2>
                </div>

                <p className="descricaoServicos">
                    Oferecemos manutenção completa para veículos Mitsubishi,
                    desde serviços preventivos até reparos mecânicos.
                </p>


                <div className="gridServicos">

                    <article className="cardServico">
                        <span className="numeroServico">01</span>

                        <div>
                            <h3>TROCA DE ÓLEO</h3>

                            <p>
                                Troca do óleo do motor e dos filtros para manter
                                a lubrificação e o funcionamento adequado do veículo.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">02</span>

                        <div>
                            <h3>FREIOS</h3>

                            <p>
                                Inspeção e substituição de pastilhas, discos,
                                sapatas e lonas para garantir uma frenagem segura.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">03</span>

                        <div>
                            <h3>SUSPENSÃO</h3>

                            <p>
                                Revisão e troca de amortecedores, molas, batentes
                                e outros componentes da suspensão.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">04</span>

                        <div>
                            <h3>ALINHAMENTO E BALANCEAMENTO</h3>

                            <p>
                                Ajustes para melhorar a estabilidade, o desgaste
                                dos pneus e o comportamento do veículo.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">05</span>

                        <div>
                            <h3>CÂMBIO</h3>

                            <p>
                                Diagnóstico, manutenção e reparos em câmbios
                                manuais e automáticos.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">06</span>

                        <div>
                            <h3>EMBREAGEM</h3>

                            <p>
                                Avaliação e substituição do kit de embreagem,
                                incluindo disco, platô e rolamento.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">07</span>

                        <div>
                            <h3>ARREFECIMENTO</h3>

                            <p>
                                Verificação do sistema de arrefecimento, incluindo
                                radiador, mangueiras, válvula termostática e fluido.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">08</span>

                        <div>
                            <h3>INJEÇÃO ELETRÔNICA</h3>

                            <p>
                                Diagnóstico de falhas no sistema de injeção para
                                identificar problemas de desempenho e consumo.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">09</span>

                        <div>
                            <h3>DIAGNÓSTICO ELETRÔNICO</h3>

                            <p>
                                Identificação de falhas eletrônicas através de
                                equipamentos de diagnóstico automotivo.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">10</span>

                        <div>
                            <h3>AR-CONDICIONADO</h3>

                            <p>
                                Manutenção do sistema de climatização para garantir
                                o funcionamento adequado e o conforto no veículo.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">11</span>

                        <div>
                            <h3>CORREIAS E TENSIONADORES</h3>

                            <p>
                                Inspeção e substituição de correias, tensionadores
                                e componentes relacionados.
                            </p>
                        </div>
                    </article>


                    <article className="cardServico">
                        <span className="numeroServico">12</span>

                        <div>
                            <h3>REVISÃO PREVENTIVA</h3>

                            <p>
                                Avaliação geral do veículo para identificar desgastes
                                e prevenir problemas futuros.
                            </p>
                        </div>
                    </article>

                </div>

            </section>

            

        </main>

        <Feedback/>

    </>
    );
}