import { useIntl } from 'react-intl'
import { TranslationDictionary } from '@app/types/i18'

const useTranslate = () => {
    const { formatMessage } = useIntl()

    const translate = (id: TranslationDictionary): string =>
        formatMessage({ id })

    return { translate }
}

export default useTranslate
