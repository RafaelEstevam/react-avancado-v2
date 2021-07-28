import * as S from './styles'

const Main = ({
  title = 'React avançadoo',
  description = 'Descrição do componente'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
