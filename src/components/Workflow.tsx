import { Accordion } from "@base-ui/react/accordion";
import { MinusIcon as Minus, PlusIcon as Plus } from "@phosphor-icons/react/ssr";

interface Step {
  id: string;
  title: string;
  description: string;
}

interface WorkflowProps {
  steps: readonly [Step, ...Step[]];
  initiallyOpen?: boolean;
}

export function Workflow({ steps, initiallyOpen = true }: WorkflowProps) {
  return (
    <Accordion.Root className="workflow" defaultValue={initiallyOpen ? [steps[0].id] : []}>
      {steps.map((step, index) => (
        <Accordion.Item key={step.id} value={step.id} className="workflow__item">
          <Accordion.Header className="workflow__header">
            <Accordion.Trigger className="workflow__trigger">
              <span className="workflow__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{step.title}</span>
              <span className="workflow__indicator" aria-hidden="true"><Plus /><Minus /></span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="workflow__panel">
            <p>{step.description}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
