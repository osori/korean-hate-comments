import transformers
import numpy as np
from .DistilKoBERT.tokenization_kobert import KoBertTokenizer
from keras.optimizers import *
import tensorflow as tf
import tensorflow_addons as tfa
import os

opt = tfa.optimizers.RectifiedAdam(lr=5.0e-5, total_steps = 2344*8, warmup_proportion=0.1, min_lr=1e-5, epsilon=1e-08)

tokenizer = KoBertTokenizer.from_pretrained('monologg/kobert')

class HateBert:
    def __init__(self):
        self.hate_model = self.create_hate_bert()
        self.hate_model.load_weights(os.path.dirname(__file__) + '/hate_bert.h5')

    def create_hate_bert(self):
        SEQ_LEN = 64
        model = transformers.TFBertModel.from_pretrained("monologg/kobert", from_pt=True)
        token_inputs = tf.keras.layers.Input((SEQ_LEN,), dtype=tf.int32, name='input_word_ids')
        mask_inputs = tf.keras.layers.Input((SEQ_LEN,), dtype=tf.int32, name='input_masks')
        segment_inputs = tf.keras.layers.Input((SEQ_LEN,), dtype=tf.int32, name='input_segment')
        bert_outputs = model([token_inputs, mask_inputs, segment_inputs])

        bert_outputs = bert_outputs[1]

        hate_drop = tf.keras.layers.Dropout(0.5)(bert_outputs)
        hate_first = tf.keras.layers.Dense(1, activation='sigmoid', kernel_initializer=tf.keras.initializers.TruncatedNormal(stddev=0.02))(hate_drop)
        hate_model = tf.keras.Model([token_inputs, mask_inputs, segment_inputs], hate_first)

        return hate_model

    def sentence_convert_data(self, data):
        SEQ_LEN = 64
        tokens, masks, segments = [], [], []
        token = tokenizer.encode(data, max_length=SEQ_LEN, truncation=True, padding='max_length')
        
        num_zeros = token.count(0) 
        mask = [1]*(SEQ_LEN-num_zeros) + [0]*num_zeros 
        segment = [0]*SEQ_LEN

        tokens.append(token)
        segments.append(segment)
        masks.append(mask)

        tokens = np.array(tokens)
        masks = np.array(masks)
        segments = np.array(segments)
        return [tokens, masks, segments]

    def predict_comment(self, sentence):
        data_x = self.sentence_convert_data(sentence)
        predict = self.hate_model.predict(data_x)
        predict_value = np.ravel(predict)
        predict_answer = np.round(predict_value,0).item()
        
        return float(predict_value)
