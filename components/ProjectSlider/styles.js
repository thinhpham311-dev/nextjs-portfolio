import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 16px;
`

const Tabs = styled.div`
  position: relative;
  z-index: 50;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`

const SlideCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background-color: #000000;

  &:hover a[data-overlay] {
    opacity: 0.8;
  }
`

const CompanyBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;

  padding: 8px;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.7);
`

const OverlayLink = styled(Link)`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to right, rgb(139, 92, 246), rgb(217, 70, 239));

  opacity: 0;
  transition: opacity 0.3s ease;
`

const OverlayText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #ffffff;
`

const EmptyState = styled.div`
  padding: 40px 0;
  text-align: center;
  color: #9ca3af;
`

export { Container, Tabs, SlideCard, CompanyBadge, OverlayLink, OverlayText, EmptyState }
