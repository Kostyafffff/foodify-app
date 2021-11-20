import React, { useMemo, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';

import { isFormValid } from "./utils";
import { useTranslation } from "react-i18next";

import {
    CustomBlur,
    InputWrapper, StyledAddToFavorites,
    StyledFormWrapper,
    StyledIconButton,
    StyledInput,
    StyledTextArea,
    StyledTitle,
    StyledWarningRecipeText,
    StyledWarningTitle,
    TextareaWrapper
} from "./style/styles";

import {
    EMPTY_STRING,
    RECIPE_TEXT,
    RECIPE_TITLE,
} from "./constants";

const RecipeForm = (props) => {
    const { isModalOpen, close, addToFavorites } = props;

    const { t } = useTranslation();

    const [ recipeTitle, setRecipeTitle ] = useState('');
    const [ recipeDescription, setRecipeDescription ] = useState('');

    const [ recipeTitleDirty, setRecipeTitleDirty ] = useState(false);
    const [ recipeDirty, setRecipeDirty ] = useState(false);

    const [ recipeTitleError, setRecipeTitleError ] = useState(t('titleError'));
    const [ recipeError, setRecipeError ] = useState(t('textError'));

    const onTouchedHandler = (event) => {
        switch (event.target.name) {
            case RECIPE_TITLE:
                event.target.placeholder = t('placeholderTitleText');
                setRecipeTitleDirty(true);
                break;
            case RECIPE_TEXT:
                event.target.placeholder = t('placeholderDishTitleText');
                setRecipeDirty(true);
                break;
            default:
                break;
        }
    };

    const onChangeHandler = (e, setRecipe, setError, errorText) => {
        setRecipe(e.target.value);

        if (e.target.value.length === 0) {
            setError(errorText);
        } else {
            setError(EMPTY_STRING);
        }
    }

    const isRecipeFormValid = useMemo(
        () => !!isFormValid(recipeTitle, recipeDescription),
        [ recipeTitle, recipeDescription ]
        );

    if (!isModalOpen) {
        return null;
    }

    const closeWithReset = () => {
        close();

        setRecipeTitle('')
        setRecipeDescription('');
        setRecipeTitleDirty(false)
        setRecipeDirty(false);
    };

    const submitFormButton = (title, description) => {
        const dishObject = {
            id: "id" + Math.random().toString(16).slice(2),
            title,
            description,
            image: null,
        };

        addToFavorites(dishObject);

        setRecipeTitle('')
        setRecipeDescription('');
    };

    return (
        <CustomBlur>
            <StyledFormWrapper
                onSubmit={(e) => e.preventDefault()}
            >
                <StyledTitle>{t('addCustomRecipe')}</StyledTitle>
                <StyledIconButton
                    onClick={() => closeWithReset()}
                >
                    <CloseIcon />
                </StyledIconButton>
                <InputWrapper>
                    <StyledInput
                        placeholder={t('placeholderTitleText')}
                        value={recipeTitle}
                        type="text"
                        name={RECIPE_TITLE}
                        onBlur={(e) => onTouchedHandler(e)}
                        onChange={(e) => onChangeHandler(e, setRecipeTitle, setRecipeTitleError, t('titleError'))}
                    />
                    {
                        (recipeTitleDirty && recipeTitleError) && (<StyledWarningTitle>{ recipeTitleError }</StyledWarningTitle>)
                    }
                </InputWrapper>
                <TextareaWrapper>
                    <StyledTextArea
                        placeholder={t('placeholderDishTitleText')}
                        value={recipeDescription}
                        name={RECIPE_TEXT}
                        onBlur={(e) => onTouchedHandler(e)}
                        onChange={(e) => onChangeHandler(e, setRecipeDescription, setRecipeError, t('textError'))}
                    />
                    {
                        (recipeError && recipeDirty) && (<StyledWarningRecipeText>{ recipeError }</StyledWarningRecipeText>)
                    }
                </TextareaWrapper>
                <StyledAddToFavorites
                    disabled={!isRecipeFormValid}
                    type={'submit'}
                    onClick={() => submitFormButton(recipeTitle, recipeDescription)}
                >
                    { t('addDish') }
                </StyledAddToFavorites>
            </StyledFormWrapper>
        </CustomBlur>
    )
}

export default React.memo(RecipeForm);
