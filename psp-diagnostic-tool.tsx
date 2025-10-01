import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, FileText } from 'lucide-react';

const PSPDiagnosticTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Passo 0
    sacadasVerticais: '',
    quedasPrecoces: '',
    acinesia: '',
    respostaLevodopa: '',
    rmAtrofia: '',
    
    // Passo 1
    mocaScore: '',
    mocaAtencao: '',
    fabScore: '',
    
    // Passo 2
    sdmtOral: '',
    tmtB: '',
    stroop: '',
    hayling: '',
    fluenciaFonemica: '',
    fluenciaAcoes: '',
    digitosReverso: '',
    letterNumber: '',
    
    // Passo 3
    ekman60: '',
    tomTest: '',
    
    // Passo 4
    rocfCopia: '',
    hovt: '',
    
    // Passo 5
    ravlt: '',
    fcsrt: '',
    fcsrtPistas: '',
    
    // Observações
    observacoes: ''
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    {
      title: "Passo 0: Suspeita Clínica",
      description: "Avaliação inicial dos sinais clínicos característicos"
    },
    {
      title: "Passo 1: Rastreamento Cognitivo",
      description: "MoCA e FAB para triagem inicial"
    },
    {
      title: "Passo 2: Bateria Executiva",
      description: "Testes específicos de função executiva"
    },
    {
      title: "Passo 3: Cognição Social",
      description: "Reconhecimento de emoções e teoria da mente"
    },
    {
      title: "Passo 4: Visuoconstrutivo",
      description: "Avaliação visuoespacial e perceptiva"
    },
    {
      title: "Passo 5: Memória Episódica",
      description: "RAVLT e FCSRT com análise de mecanismos"
    },
    {
      title: "Resumo e Interpretação",
      description: "Análise integrada dos resultados"
    }
  ];

  const generateReport = () => {
    const suspeitaClinica = 
      formData.sacadasVerticais === 'sim' || 
      formData.quedasPrecoces === 'sim' || 
      (formData.acinesia === 'sim' && formData.respostaLevodopa === 'fraca');
    
    const mocaBaixo = formData.mocaScore && parseInt(formData.mocaScore) < 26;
    
    const perfilExecutivo = 
      (formData.fluenciaFonemica === 'comprometida') ||
      (formData.stroop === 'comprometido' || formData.hayling === 'comprometido') ||
      (formData.digitosReverso === 'comprometido');
    
    const cognicaoSocial = 
      formData.ekman60 === 'comprometido' || formData.tomTest === 'comprometido';
    
    const visuoconstrutivo = 
      formData.rocfCopia === 'comprometida' || formData.hovt === 'comprometido';
    
    const memoriaEpisodica = 
      formData.ravlt === 'comprometida' || formData.fcsrt === 'comprometido';

    let compatibilidade = 0;
    let criterios = [];

    if (suspeitaClinica) {
      compatibilidade += 2;
      criterios.push("Sinais clínicos sugestivos de PSP presentes");
    }

    if (mocaBaixo) {
      compatibilidade += 1;
      criterios.push("MoCA < 26 com perfil frontal/atencional");
    }

    if (perfilExecutivo) {
      compatibilidade += 2;
      criterios.push("Déficits executivos característicos (fluência fonêmica, inibição/set-shifting)");
    }

    if (cognicaoSocial) {
      compatibilidade += 1;
      criterios.push("Déficits em cognição social");
    }

    if (visuoconstrutivo) {
      compatibilidade += 1;
      criterios.push("Comprometimento visuoconstrutivo");
    }

    if (memoriaEpisodica) {
      compatibilidade += 1;
      criterios.push("Comprometimento de memória episódica");
    }

    let nivelCompatibilidade = "Baixa";
    let cor = "text-green-600";
    let recomendacao = "Perfil neuropsicológico pouco compatível com PSP. Considerar outros diagnósticos.";

    if (compatibilidade >= 6) {
      nivelCompatibilidade = "Alta";
      cor = "text-red-600";
      recomendacao = "Perfil altamente compatível com PSP. Considerar classificação MDS (PSP provável/possível) e integração com neuroimagem e biomarcadores.";
    } else if (compatibilidade >= 4) {
      nivelCompatibilidade = "Moderada";
      cor = "text-orange-600";
      recomendacao = "Perfil moderadamente compatível com PSP. Recomenda-se follow-up longitudinal e investigação complementar com neuroimagem (MRPI) e avaliação oculomotora.";
    }

    return { nivelCompatibilidade, cor, criterios, recomendacao, compatibilidade };
  };

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Identificar sinais clínicos que justifiquem suspeita de PSP antes da avaliação neuropsicológica detalhada.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sacadas verticais lentas ou paresia do olhar vertical?
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.sacadasVerticais}
                  onChange={(e) => updateField('sacadasVerticais', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="incerto">Incerto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Quedas precoces / instabilidade postural axial?
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.quedasPrecoces}
                  onChange={(e) => updateField('quedasPrecoces', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="incerto">Incerto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Acinesia axial presente?
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.acinesia}
                  onChange={(e) => updateField('acinesia', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="incerto">Incerto</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Resposta à levodopa?
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.respostaLevodopa}
                  onChange={(e) => updateField('respostaLevodopa', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="boa">Boa</option>
                  <option value="fraca">Fraca/Ausente</option>
                  <option value="naoTestado">Não testado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  RM com atrofia mesencefálica desproporcional (MRPI alto, relação mesencéfalo/ponte baixa)?
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.rmAtrofia}
                  onChange={(e) => updateField('rmAtrofia', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                  <option value="naoRealizado">Não realizado</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Rastreamento cognitivo inicial com MoCA e FAB, identificando perfil frontal/atencional.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Escore MoCA (0-30)
                </label>
                <input 
                  type="number"
                  min="0"
                  max="30"
                  className="w-full p-2 border rounded"
                  value={formData.mocaScore}
                  onChange={(e) => updateField('mocaScore', e.target.value)}
                  placeholder="Ex: 22"
                />
                <p className="text-xs text-gray-500 mt-1">Cut-off orientativo: &lt; 26</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subitens atencionais/visuoespaciais do MoCA
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.mocaAtencao}
                  onChange={(e) => updateField('mocaAtencao', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservados">Preservados</option>
                  <option value="levementeComprometidos">Levemente comprometidos</option>
                  <option value="comprometidos">Comprometidos</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Escore FAB - Frontal Assessment Battery (0-18) - opcional
                </label>
                <input 
                  type="number"
                  min="0"
                  max="18"
                  className="w-full p-2 border rounded"
                  value={formData.fabScore}
                  onChange={(e) => updateField('fabScore', e.target.value)}
                  placeholder="Ex: 12"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Avaliação executiva detalhada, priorizando versões orais para minimizar viés motor/oculomotor.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-sm text-gray-700">A) Velocidade e Atenção</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  SDMT Oral (Symbol Digit Modalities Test)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.sdmtOral}
                  onChange={(e) => updateField('sdmtOral', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  TMT-B Oral (Trail Making Test B)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.tmtB}
                  onChange={(e) => updateField('tmtB', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <h3 className="font-semibold text-sm text-gray-700 mt-6">B) Set-Shifting e Inibição</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Stroop (condição de interferência)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.stroop}
                  onChange={(e) => updateField('stroop', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Hayling Test
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.hayling}
                  onChange={(e) => updateField('hayling', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <h3 className="font-semibold text-sm text-gray-700 mt-6">C) Fluência Verbal</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Fluência Fonêmica (FAS)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.fluenciaFonemica}
                  onChange={(e) => updateField('fluenciaFonemica', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservada">Preservada</option>
                  <option value="levementeComprometida">Levemente comprometida</option>
                  <option value="comprometida">Comprometida</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">⚠️ Muito importante: redução fonêmica é altamente frequente em PSP</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Fluência de Ações (verbos)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.fluenciaAcoes}
                  onChange={(e) => updateField('fluenciaAcoes', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservada">Preservada</option>
                  <option value="levementeComprometida">Levemente comprometida</option>
                  <option value="comprometida">Comprometida</option>
                </select>
              </div>

              <h3 className="font-semibold text-sm text-gray-700 mt-6">D) Memória de Trabalho</h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Dígitos Reverso
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.digitosReverso}
                  onChange={(e) => updateField('digitosReverso', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Letter-Number Sequencing
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.letterNumber}
                  onChange={(e) => updateField('letterNumber', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Avaliar cognição social (alto valor discriminativo). Déficits multimodais são consistentes em PSP.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Reconhecimento de Emoções (Ekman-60 / TASIT)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.ekman60}
                  onChange={(e) => updateField('ekman60', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Teoria da Mente (Faux-Pas / Reading the Mind in the Eyes)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.tomTest}
                  onChange={(e) => updateField('tomTest', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Avaliar habilidades visuoconstrutivas e visuoperceptivas, considerando o efeito de sacadas lentas.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  ROCF - Figura Complexa de Rey (Cópia)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.rocfCopia}
                  onChange={(e) => updateField('rocfCopia', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservada">Preservada</option>
                  <option value="levementeComprometida">Levemente comprometida</option>
                  <option value="comprometida">Comprometida</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">A cópia costuma cair quando há demanda de planejamento visuoespacial complexo</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  HOVT - Hooper Visual Organization Test
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.hovt}
                  onChange={(e) => updateField('hovt', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>Objetivo:</strong> Avaliar memória episódica com inferência de mecanismo. Em PSP, comprometimento tende a ser mais brando que na EA.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  RAVLT - Rey Auditory Verbal Learning Test
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.ravlt}
                  onChange={(e) => updateField('ravlt', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  FCSRT - Free and Cued Selective Reminding Test (recordação livre)
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.fcsrt}
                  onChange={(e) => updateField('fcsrt', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="preservado">Preservado</option>
                  <option value="levementeComprometido">Levemente comprometido</option>
                  <option value="comprometido">Comprometido</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  FCSRT com pistas semânticas - resposta
                </label>
                <select 
                  className="w-full p-2 border rounded"
                  value={formData.fcsrtPistas}
                  onChange={(e) => updateField('fcsrtPistas', e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="melhoraSignificativa">Melhora significativa com pistas</option>
                  <option value="melhoraLeve">Melhora leve com pistas</option>
                  <option value="semMelhora">Sem melhora com pistas</option>
                  <option value="naoAplicado">Não aplicado</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Em PSP, padrão é variável; pode haver melhora parcial (diferente da EA)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Observações adicionais
                </label>
                <textarea 
                  className="w-full p-2 border rounded"
                  rows="3"
                  value={formData.observacoes}
                  onChange={(e) => updateField('observacoes', e.target.value)}
                  placeholder="Ex: viés motor observado em testes cronometrados, limitações oculomotoras, escolaridade, etc."
                />
              </div>
            </div>
          </div>
        );

      case 6:
        const report = generateReport();
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 p-6">
              <h3 className="font-semibold text-lg mb-2">Resumo da Avaliação</h3>
              <p className="text-sm text-gray-700">
                Análise integrada baseada nos critérios MDS 2017 e perfil neuropsicológico
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Compatibilidade com PSP:</h4>
                <span className={`text-2xl font-bold ${report.cor}`}>
                  {report.nivelCompatibilidade}
                </span>
              </div>
              
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      report.compatibilidade >= 6 ? 'bg-red-500' : 
                      report.compatibilidade >= 4 ? 'bg-orange-500' : 
                      'bg-green-500'
                    }`}
                    style={{ width: `${(report.compatibilidade / 8) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Pontuação: {report.compatibilidade}/8
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-semibold text-sm">Critérios Presentes:</h5>
                {report.criterios.length > 0 ? (
                  <ul className="space-y-2">
                    {report.criterios.map((criterio, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{criterio}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 italic">Nenhum critério significativo identificado</p>
                )}
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-sm mb-1">Recomendação Clínica:</h5>
                  <p className="text-sm text-gray-700">{report.recomendacao}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h5 className="font-semibold">Assinatura Neuropsicológica Típica de PSP:</h5>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <strong>Executivo:</strong> Fluência fonêmica ↓↓, set-shifting/inibição comprometidos, lentificação</li>
                <li>• <strong>Cognição Social:</strong> Déficits em ToM e reconhecimento de emoções</li>
                <li>• <strong>Memória:</strong> Episódica comprometida, mas menos que EA; padrão "dependente de recuperação"</li>
                <li>• <strong>Visuoconstrutivo:</strong> ROCF cópia com dificuldade de planejamento</li>
                <li>• <strong>Diferencial com EA:</strong> Melhor resposta a pistas no FCSRT (variável), reconhecimento menos afetado</li>
                <li>• <strong>Diferencial com DP:</strong> Disfunção executiva mais grave, oculomotricidade vertical comprometida</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h5 className="font-semibold mb-3">Próximos Passos Sugeridos:</h5>
              <div className="space-y-2 text-sm">
                <p>1. <strong>Integração com critérios MDS 2017:</strong> Classificar como PSP provável/possível com base nos 4 domínios (oculomotor, postural, acinesia, cognitivo)</p>
                <p>2. <strong>Neuroimagem:</strong> Avaliar MRPI, MRPI 2.0, relação mesencéfalo/ponte, sinais "hummingbird" e "Mickey Mouse"</p>
                <p>3. <strong>Avaliação oculomotora:</strong> VOG (video-oculografia) quando disponível para documentar paresia do olhar</p>
                <p>4. <strong>Follow-up longitudinal:</strong> Reavaliação em 6-12 meses com mesma bateria para documentar progressão</p>
                <p>5. <strong>Fenótipo clínico:</strong> Determinar variante (PSP-RS, PSP-P, PSP-F, PSP-SL, PSP-CBS)</p>
              </div>
            </div>

            {formData.observacoes && (
              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-semibold text-sm mb-2">Observações do Avaliador:</h5>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{formData.observacoes}</p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Imprimir/Exportar Relatório
              </button>
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setFormData({
                    sacadasVerticais: '', quedasPrecoces: '', acinesia: '', respostaLevodopa: '', rmAtrofia: '',
                    mocaScore: '', mocaAtencao: '', fabScore: '', sdmtOral: '', tmtB: '', stroop: '', hayling: '',
                    fluenciaFonemica: '', fluenciaAcoes: '', digitosReverso: '', letterNumber: '', ekman60: '',
                    tomTest: '', rocfCopia: '', hovt: '', ravlt: '', fcsrt: '', fcsrtPistas: '', observacoes: ''
                  });
                }}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
              >
                Nova Avaliação
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">
              Algoritmo Diagnóstico PSP
            </h1>
            <p className="text-indigo-100 text-sm">
              Perfil Neuropsicológico - Critérios MDS 2017
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {steps[currentStep].title}
              </span>
              <span className="text-sm text-gray-500">
                {currentStep + 1} de {steps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between border-t">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Próximo
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(0)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Nova Avaliação
              </button>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <p className="text-xs text-gray-600">
            <strong>Nota:</strong> Este algoritmo é baseado nos critérios MDS 2017 e literatura recente sobre PSP. 
            Deve ser usado por profissionais qualificados como ferramenta de suporte diagnóstico, não substituindo 
            avaliação clínica completa, neuroimagem e biomarcadores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PSPDiagnosticTool;