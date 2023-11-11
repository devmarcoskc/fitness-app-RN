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
  }
}