import { ServerSelection } from "../../../components/templates/ServerSelection";
import { StartupStep } from "../../../components/templates/StartupStep";
import { Wrapper } from "../../../components/templates/Wrapper";

export const StartupFirstStep = () => {
  return (
    <Wrapper isIntro>
      <StartupStep step={0}>
        <ServerSelection title="Comece com seu" />
      </StartupStep>
    </Wrapper>
  );
};
