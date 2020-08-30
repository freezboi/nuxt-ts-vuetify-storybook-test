import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import TestFileInput from '@/components/modules/Form/TestFileInput.vue';

export default {
  title: 'modules/Form/TestFileInput',
  components: TestFileInput,
  decorators: [withKnobs]
}

export const Default = () => ({
  components: { TestFileInput },
  template: `
    <v-app>
      <v-container>
        <test-file-input />
      </v-container>
    </v-app>
  `,
});
