export function SwitchExerciseToShow(muscleSelected) {
  switch(muscleSelected) {
    case 'Costas':
      return [
        {label: 'Barra fixa', value: 'barra-fixa'},
        {label: 'Remada Curvada', value: 'remada-curvada'},
        {label: 'Serrote', value: 'serrote'},
        {label: 'Remada Cavalinho', value: 'remada-cavalinho'},
        {label: 'Remada no Banco', value: 'remada-no-banco'},
        {label: 'Puxada com Triângulo', value: 'puxada-triângulo'},
        {label: 'Puxada aberta com barra', value: 'puxada-aberta'},
        {label: 'Remada na máquina', value: 'remada-na-máquina'},
      ]
    case 'Peito':
      return [
        {label: 'Supino', value: 'supino-reto'},
        {label: 'Supino Inclinado', value: 'supino-inclinado'},
        {label: 'Supino Declinado', value: 'supino-declinado'},
        {label: 'Flexão', value: 'flexão'},
        {label: 'Voador', value: 'voador'},
        {label: 'Peck Deck', value: 'peck-deck'},
        {label: 'crossover', value: 'crossover'},
      ]
    case 'Pernas':
      return [
        {label: 'Agachamento', value: 'agachamento'},
        {label: 'Afundo', value: 'afundo'},
        {label: 'Panturrilha', value: 'panturrilha'},
        {label: 'Agachamento Rack', value: 'rack'},
        {label: 'Leg Press', value: 'leg-press'},
        {label: 'Extensora', value: 'extensora'},
        {label: 'Mesa Flexora', value: 'mesa-flexora'},
        {label: 'Stiff', value: 'stiff'},
        {label: 'Elevação Pélvica', value: 'elevação-pélvica'}
      ]
    case 'Tríceps':
      return [
        {label: 'Tríceps testa', value: 'tríceps-testa'},
        {label: 'Tríceps banco', value: 'tríceps-banco'},
        {label: 'Tríceps paralela', value: 'tríceps-paralela-máquina'},
        {label: 'Tríceps extensão corda', value: 'tríceps-extensão-corda'},
        {label: 'Tríceps barra', value: 'tríceps-polia-barra'},
        {label: 'Tríceps polia corda', value: 'tríceps-polia-corda'},
      ]
    case 'Ombro':
      return [
        {label: 'Desenvolvimento halter', value: 'desenvolvimento-ombro-halter'},
        {label: 'Elevação lateral', value: 'elevação-lateral'},
        {label: 'Crucifixo invertido', value: 'crucifixo-invertido'},
        {label: 'Voador invertido', value: 'voador-invertido'},
        {label: 'Arnold ombro', value: 'arnold-ombro'},
      ]
    case 'Bíceps':
      return [
        {label: 'Rosca com barra', value: 'rosca-barra'},
        {label: 'Rosca haltere', value: 'rosca-halteres'},
        {label: 'Rosca martelo', value: 'rosca-martelo'},
        {label: 'Rosca barra w', value: 'rosca-barra-w'},
        {label: 'Bíceps corda', value: 'bíceps-corda'},
        {label: 'Bíceps inclinado banco', value: 'bíceps-banco-inclinado'},
        {label: 'Rosca Scott', value: 'rosca-scott'}
      ]
    case 'Abdominal':
      return [
        {label: 'Abdominal tradicional', value: 'abdominal-tradicional'},
        {label: 'Abdominal oblíquo', value: 'abdominal-oblíquo'},
        {label: 'Abdominal inferior', value: 'abdominal-inferior'},
        {label: 'Abdominal com rolo', value: 'abdominal-com-rolo'},
        {label: 'Prancha', value: 'prancha'}
      ]
  }
}